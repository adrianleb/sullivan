echo saving important files.
mkdir save
mv \
    .git \
    node_modules \
    src \
    .scripts \
    webpack.config.js \
save/

echo removing build files.
rm -rf ./*.js ./*.js.map `find . -maxdepth 1 -type d | cut -d/ -f2 | grep -v '^save$' | grep -v '^.$'`

echo Restoring saved files.

for x in save/* save/.[!.]* save/..?*; do
  if [ -e "$x" ]; then mv -- "$x" ./; fi
done
rmdir save/

echo Done restoring saved files.

