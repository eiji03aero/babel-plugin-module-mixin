export SHELL = /bin/bash

YARN := yarn

.PHONY: install build-watch \
	parse parse-debug parse-watch \
	watch-mm \
	babel-watch \
	update update-mm update-babel

install:
	yarn install
	make update-mm

parse:
	node ./parse/input.js

parse-debug:
	node --inspect-brk=0.0.0.0:9230 ./parse/input.js

parse-watch:
	make parse
	npx chokidar "./parse/input*" -c "make parse"

transform-watch:
	npx babel ./transform/input.js --out-file ./transform/output.js --watch

watch-mm:
	npx chokidar "../src/**/*" -c "make update-mm"

babel-watch:
	npx chokidar "../../babel/**/*" -c "make update-babel"

update:
	make update-mm
	make update-babel

update-mm:
	cp -r ../src ./node_modules/babel-plugin-module-mixin/

update-babel:
	rm -rf ./node_modules/@babel/parser/
	cp -r ../../babel/packages/babel-parser/lib ./node_modules/@babel/parser/
	rm -rf ./node_modules/@babel/types/
	cp -r ../../babel/packages/babel-types/lib ./node_modules/@babel/types/
