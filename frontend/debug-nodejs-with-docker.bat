docker run -ti --rm --volume "%cd%:/usr/app" --net frontend_default -p 3000:3000 -p 9229:9229 frontend:latest npm run debug-production