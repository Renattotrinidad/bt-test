/* Requerimos el webdriver y lo manejamos en una constante */
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

/* Indicamos que el driver a utilizar sera chrome */
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

/* Colocamos la pagina que nos interesa*/
driver.get('https://www.google.com').then(function () {
    /* Dentro de esta funcion podemos indicar que vamos a buscar por nombre de atributo de etiqueta */
    driver.findElement(webdriver.By.name('q')).sendKeys('amazon\n').then(async function () {
        /* Podemos buscar también un elemento por el xpath, que sería como el path del resultado mostrado en pantalla */
        await driver.findElement({ xpath: '//*[@id="tads"]/div/div/div/div/div[1]/a'}).click();
        /* También podemos buscar por id de etiqueta para no limitarnos */
        driver.findElement(webdriver.By.id('twotabsearchtextbox')).sendKeys('samsung charger\n').then(function () {
            
            driver.getTitle().then(function (title) {

                console.log("Titulo de la pagina: " + title);

                if(title === "Amazon.com : samsung charger_"){
                    console.log("test aprobado");
                }else{
                    console.log("Test no aprobado");
                }

                driver.quit();
            });
        });
    });
});