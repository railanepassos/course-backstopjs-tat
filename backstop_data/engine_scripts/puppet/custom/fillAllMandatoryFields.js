module.exports = async page => {
    await page.type("#first-name", "Railane");
    await page.type("#last-name", "Passos");
    await page.type("#email", "railane@mailinator.com");
    await page.click("#agree");

};