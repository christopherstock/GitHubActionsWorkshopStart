# base image for this container
FROM node:14

# make container's port 8181 accessible to the outside
EXPOSE 8181

# copy 'public' directory into the container
COPY public/* public/

# run the app bundle with node
CMD ["node", "./public/app-bundle.js"]
