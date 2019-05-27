task :default do
  sh "hjson -j style.hjson > style.json"
  sh "gl-style-validate style.json"
  sh "browserify -o bundle.js -t [ babelify --presets [ @babel/preset-env ] ] app.js"
end

task :download do
  sh "curl -C - -O http://www.data.jma.go.jp/developer/gis/20190125_AreaForecast_GIS.zip"
end

task :unzip do
  %w{shp dbf shx}.each {|t|
    sh "unzip -p 20190125_AreaForecast_GIS.zip '*.#{t}' > a.#{t}"
  }
end

task :tippecanoe do
  sh "ogr2ogr -f GeoJSONSeq /vsistdout/ a.shp | tippecanoe --force --output-to-directory=zxy --no-tile-compression --name='area-forecast' --attribution='気象庁「全国・地方予報区」を加工して作成' --layer='area-forecast' --maximum-zoom=10 --minimum-zoom=0"
end

task :budo do
  sh "budo --open"
end
