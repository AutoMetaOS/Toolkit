# WebToolkit
A Basic Web toolkit

<div style="text-align:center;width:100%;">
<img width="300px" height="300px" src="./static/AMKit.svg" />
</div>

## Building

```
docker build -t educelestia .
docker build -t registry.heroku.com/educelestia/web .
docker push registry.heroku.com/educelestia/web
heroku container:release web -a educelestia
```