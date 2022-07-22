# WebToolkit
A Basic Web toolkit

<div align="center">
<img src="./static/AMKit.svg" alt="amos" width="300px" height="300px"/>
</div>

```bash
nixpacks build ./path/to/app --name my-app \
                             --pkgs cowsay \
                             --build-cmd ./build.sh \
                             --start-cmd "echo hello | cowsay"
```

## Building

```
docker build -t educelestia .
docker build -t registry.heroku.com/educelestia/web .
docker push registry.heroku.com/educelestia/web
heroku container:release web -a educelestia
```
