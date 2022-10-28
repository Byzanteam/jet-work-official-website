.DEFAULT_GOAL := help

.PHONY: help build

APP_VSN ?= $(shell awk -F '"' '/"version"/ { print $$4 }' package.json)
TAG ?= jet-home:$(APP_VSN)

help: echo-version ## List commands
	@awk 'BEGIN {FS = ":.*##"; printf ""} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

build: echo-version ## Build the image
	@docker build . --tag=$(TAG)

echo-version:
	# ImageTag: `$(TAG)`
	# ----------------------
