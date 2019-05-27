task :default do
end

task :download do
  sh "curl -O http://www.data.jma.go.jp/developer/gis/20190125_AreaForecast_GIS.zip"
end

task :unzip do
  %w{shp dbf shx}.each {|t|
    sh "unzip -p 20190125_AreaForecast_GIS.zip '*.#{t}' > a.#{t}"
  }
end

