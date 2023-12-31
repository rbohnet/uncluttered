import { toFormData } from "../src/to-form-data.js";

const { assert } = chai;

suite("toFormData", function () {
  test("should return a FormData object", function () {
    const form = document.createElement("form");
    form.innerHTML = `
        <input type="text" name="fullname" value="Important Person">
        <button name="submitextra" value="So much else going on">Send</button>
        `;
    const formdata = toFormData({
      form,
      submitter: form.querySelector("button"),
    });
    assert.isOk(formdata);
    assert.equal(formdata.get("fullname"), "Important Person");
    assert.equal(formdata.get("submitextra"), "So much else going on");
  });
});