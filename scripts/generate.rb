#!/usr/bin/env ruby

require 'json'

def read_svg_icons(dir)
  Dir.glob(File.join(dir, '*.svg')).inject({}) do |ret, f|
    name = File.basename(f, '.svg')
    name = 'msg' if name === 'message'
    ret[name] = File.read f
    ret
  end
end

def convert_html_to_jsx(html)
  html.gsub(/xmlns="[^"]+"\s*/, '')
    .gsub(/ width="[^"]+"/, ' width={length}')
    .gsub(/ height="[^"]+"/, ' height={length}')
    .gsub(/stroke-width="[^"]+"/, 'strokeWidth={strokeWidth}')
    .gsub('stroke-linecap', 'strokeLinecap')
    .gsub('stroke-linejoin', 'strokeLinejoin')
    .gsub("\n", "\n#{' ' * 6}")
end

def generate_case_clause(name, html)
  <<-JS
    case '#{name}': {
      return #{convert_html_to_jsx html};
    }
  JS
end

def generate_case_clauses(icons)
  icons.map{|n, h| generate_case_clause(n, h)}.join("\n")
end

def generate_name_type(icons)
  icons.keys.map{|n| "'#{n}'"}.join("\n  | ")
end

def generate_index_tsx(icons)
  tsx = File.join(__dir__, '..', 'index.tsx')
  template =  File.read File.join(__dir__, 'index_template.tsx')

  File.write(tsx, <<-JS)
  #{template}

  function renderIcon(name: BytesizeIconName, length: number, strokeWidth: string): JSX.Element | null {
    switch (name) {
  #{generate_case_clauses icons}
      default:
        return null;
    }
  }

  export type BytesizeIconName
    = #{generate_name_type icons}
  ;
  JS
end

def generate_readme(icons)
  columns = icons.keys.map{|n| "| ![#{n} icon](https://raw.githubusercontent.com/danklammer/bytesize-icons/master/dist/icons/#{n}.svg) | `<Icon name=\"#{n}\"/>` |"}.join("\n")
  columns = icons.map{|n, h| "| ![#{n} icon](https://rhysd.github.io/react-component-bytesize-icons/icons/#{n === 'message' ? 'msg' : n}.svg) | `<Icon name=\"#{n}\"/>` |"}.join("\n")
  table = <<-TABLE
| Icon | React Component |
|------|-----------------|
#{columns}
  TABLE
  template = File.read File.join(__dir__, 'README_template.md')
  readme =  File.join(__dir__, '..', 'README.md')
  File.write(readme, template.gsub('{All icons table here}', table))
end

def generate_json_for_test(icons)
  file =  File.join(__dir__, '..', 'test', 'icons.json')
  File.write(file, JSON.generate(icons.keys))
end

icons = read_svg_icons File.join(__dir__, '..', 'node_modules', 'bytesize-icons', 'dist/icons')
raise 'Icons not found' if icons.empty?

generate_index_tsx icons
generate_readme icons
generate_json_for_test icons
