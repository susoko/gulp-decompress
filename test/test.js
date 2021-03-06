'use strict';

var decompress = require('../');
var fs = require('fs');
var gutil = require('gulp-util');
var isJpg = require('is-jpg');
var path = require('path');
var test = require('ava');

test('extract .tar', function (t) {
	t.plan(2);

	var stream = decompress();

	stream.on('data', function (file) {
		t.assert(isJpg(file.contents));
		t.assert(path.basename(file.path) === 'test.jpg');
	});

	stream.end(new gutil.File({
		contents: fs.readFileSync(path.join(__dirname, 'fixtures/test.tar')),
		path: path.join(__dirname, 'fixtures/test.tar')
	}));
});

test('extract .tar.bz2', function (t) {
	t.plan(2);

	var stream = decompress();

	stream.on('data', function (file) {
		t.assert(isJpg(file.contents));
		t.assert(path.basename(file.path) === 'test.jpg');
	});

	stream.end(new gutil.File({
		contents: fs.readFileSync(path.join(__dirname, 'fixtures/test.tar.bz2')),
		path: path.join(__dirname, 'fixtures/test.tar.bz2')
	}));
});

test('extract .tar.gz', function (t) {
	t.plan(2);

	var stream = decompress();

	stream.on('data', function (file) {
		t.assert(isJpg(file.contents));
		t.assert(path.basename(file.path) === 'test.jpg');
	});

	stream.end(new gutil.File({
		contents: fs.readFileSync(path.join(__dirname, 'fixtures/test.tar.gz')),
		path: path.join(__dirname, 'fixtures/test.tar.gz')
	}));
});

test('extract .zip', function (t) {
	t.plan(2);

	var stream = decompress();

	stream.on('data', function (file) {
		t.assert(isJpg(file.contents));
		t.assert(path.basename(file.path) === 'test.jpg');
	});

	stream.end(new gutil.File({
		contents: fs.readFileSync(path.join(__dirname, 'fixtures/test.zip')),
		path: path.join(__dirname, 'fixtures/test.zip')
	}));
});
