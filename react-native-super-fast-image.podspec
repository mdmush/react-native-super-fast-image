require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name = "react-native-super-fast-image"
  s.version = package['version']
  s.summary = "🚩 SuperFastImage, performant React Native image component."

  s.authors = { "Dylan Vann" => "dylan@mdmush.com" }
  s.homepage = "https://github.com/mdmush/react-native-super-fast-image#readme"
  s.license = "MIT"

  s.platform = :ios, "8.0"
  s.framework    = 'UIKit'
  s.requires_arc = true

  s.source = { :git => "https://github.com/mdmush/react-native-super-fast-image.git" }
  s.source_files = "ios/**/*.{h,m}"
  s.exclude_files = "ios/Vendor/**/*.{h,m}"

  s.dependency 'React'
  s.dependency 'SDWebImage', '~> 5.0'
end