'use strict'

const test = require('ava')
const utils = require('../lib/utils')

test('extrating hashtags from text', t => {
  let tags = utils.extractTags('a #picture with tags #AwesOM #Oscar and #100 ##yes')

  t.deepEqual(tags, [
    'picture',
    'awesom',
    'oscar',
    '100',
    'yes'
  ])

  tags = utils.extractTags('a picture with no tags')
  t.deepEqual(tags, [])

  tags = utils.extractTags()
  t.deepEqual(tags, [])

  tags = utils.extractTags(null)
  t.deepEqual(tags, [])
})
