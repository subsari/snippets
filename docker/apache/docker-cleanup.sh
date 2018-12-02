#!/bin/bash

# Stop and remove containers
docker stop dev
docker stop stage
docker stop prod
docker rm dev
docker rm stage
docker rm prod

# Remove images
docker rmi centosapache
docker rmi seasadmin/centos

# Uninstall Docker
yum remove docker -y