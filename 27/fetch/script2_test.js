async function getData() {
  let response = await fetch("https://randomuser.me/api/?results=10")
  let data = await response.json()
  return data.results
}

async function runner(callback) {
  let users = await getData()
  callback(users)
}

QUnit.module('data fetch', function() {
  QUnit.test('fetch from API', function(assert) {
    const done = assert.async()

    runner(res => {
      // test apakah balikannya ada 10 data
      assert.equal(res.length, 10)

      // test apakah name dari parameter pertama
      // adalah object
      assert.equal(typeof res[0].name, "object")
      assert.equal(typeof res[0].dob.age, "number")
      done()
    })
  });
});