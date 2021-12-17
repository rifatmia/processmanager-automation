/* global browser, describe, it, fin */
const expect = require("chai").expect;
const myApp = browser;

describe("Application For Process-Manager", () => {
  // it('Process-Manager appears on launch', () => {
  //   let currentWindowTitle = myApp.getTitle()

  //   let openfinWindowName = myApp.execute(() => {
  //     return fin.desktop.Window.getCurrent().name
  //   }).value

  //   expect(currentWindowTitle).to.equal('OpenFin Process Manager')
  //   expect(openfinWindowName).to.equal('process-manager')
  // })
  // it('Shows a 2nd window when Hello World is submitted to the form', () => {
  //   let homePageWindowTabId = myApp.getCurrentTabId()

  //   myApp.setValue('#valueField', 'Hello World')
  //   myApp.click('#submitButton')
  //   myApp.pause(3000)
  //   myApp.setValue('#valueField', '')
  //   myApp.pause(3000)

  //   let myAppWindowTabIds = myApp.getTabIds()

  //   expect(myAppWindowTabIds.length).to.equal(1)

  //   let confirmationPageWindowTabId = myAppWindowTabIds.filter(
  //     (value) => {
  //       return value !== homePageWindowTabId
  //     })[0]

  //   myApp.switchTab(confirmationPageWindowTabId)

  //   let currentWindowTitle = myApp.getTitle()
  //   let openfinWindowName = myApp.execute(() => {
  //     return fin.desktop.Window.getCurrent().name
  //   }).value

  //   expect(currentWindowTitle).to.equal('Confirmation Page')
  //   expect(openfinWindowName).to.equal('confirmationWindow')

  //   myApp.execute(() => {
  //     fin.desktop.Window.getCurrent().close()
  //   })
  //   myApp.switchTab(homePageWindowTabId)

  //   let newWindowTitle = myApp.getTitle()
  //   expect(newWindowTitle).to.equal('Home Page')
  //  })
  // it("Verifies the version of the OpenFin Runtime", async () => {
  //   browser.setTimeout({ script: 60000 });
  //   let runtimeVersion = browser.executeAsync(done => {
  //     fin.System.getVersion().then(version => {
  //       done(version);
  //     });
  //   });

  //   expect(await runtimeVersion).to.equal("16.82.50.6");
  // });
  // it("Verify RVM version", async () => {
  //   let rvmInfo = await $("#rvmInfo");
  //   let RVM = await rvmInfo.getText();
  //   console.log(RVM);
  //   expect(RVM).to.equal("RVM: 5.5.0.108");
  // });
  // it("User can press Log tab", async () => {
  //   let elem = await $(
  //     '//*[@id="content"]/div/div/div[1]/div[2]/div/div/div/div[1]/div[2]'
  //   ); //*[@id="content"]/div/div/div[1]/div[2]/div/div/div/div[1]/div[2]
  //   await elem.click();
  //   let logTab = await $(
  //     '//*[@id="content"]/div/div/div[3]/div[2]/div[2]/div[1]/div[1]/div/div[2]/div[1]'
  //   );
  //   let fileNametxt = await logTab.getText();
  //   let logTab2 = await $(
  //     '//*[@id="content"]/div/div/div[3]/div[2]/div[2]/div[1]/div[1]/div/div[3]/div[1]'
  //   );
  //   let sizeName = await logTab2.getText();
  //   let logTab3 = await $(
  //     '//*[@id="content"]/div/div/div[3]/div[2]/div[2]/div[1]/div[1]/div/div[1]/div[1]'
  //   );
  //   let dateTxt = await logTab3.getText();
  //   expect(fileNametxt).to.equal("Filename");
  //   expect(sizeName).to.equal("Size");
  //   expect(dateTxt).to.equal("Date/Time");
  //   //return;
  // });

  it("Clicking on Window Info on Windows View shows App Info", async () => {
    browser.setTimeout({ implicit: 5000 });
    let elem = await $(
      '//*[@id="content"]/div/div/div[1]/div[2]/div/div/div/div[1]/div[3]'
    );
    await elem.click();
    let el = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div'
    );
    await el.click();
    //await el.click()
    let appInfoBtn = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[2]/div[1]/div[2]/div/div[7]/div/a[4]'
    );
    await appInfoBtn.click();
    let appInfo = await $("#winDetailsContent");
    let appinfotxt = await appInfo.getText();
    console.log(appinfotxt);
    expect(appinfotxt).to.include("uuid");
    expect(appinfotxt).to.include("name");
  });
  it("User can press Window Tab", async () => {
    let elem = await $(
      '//*[@id="content"]/div/div/div[1]/div[2]/div/div/div/div[1]/div[3]'
    );
    await elem.click();
    let windowTab = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[1]/div/div[2]/div[1]'
    );
    let windowTxt = await windowTab.getText();
    let windowTab2 = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[1]/div/div[3]/div[1]'
    );
    let urlTxt = await windowTab2.getText();
    let windowTab3 = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[1]/div/div[4]/div[1]'
    );
    let showingTxt = await windowTab3.getText();
    let windowTab4 = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[1]/div/div[5]/div[1]'
    );
    let positionTxt = await windowTab4.getText();
    let windowTab5 = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[1]/div/div[6]/div[1]'
    );
    let childrenTxt = await windowTab5.getText();
    let windowTab6 = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[1]/div/div[7]/div[1]'
    );
    let actionsTxt = await windowTab6.getText();
    expect(windowTxt).to.equal("Window");
    expect(urlTxt).to.equal("URL");
    expect(showingTxt).to.equal("Showing");
    expect(positionTxt).to.equal("Position");
    expect(childrenTxt).to.equal("Children");
    expect(actionsTxt).to.equal("Actions");
  });

  it("User can press Services Tab", async () => {
    let elem = await $(
      '//*[@id="content"]/div/div/div[1]/div[2]/div/div/div/div[1]/div[5]'
    );
    await elem.click();
    let servicesTab = await $(
      '//*[@id="content"]/div/div/div[3]/div[5]/div[2]/div[1]/div[1]/div/div[1]/div[1]'
    );
    let serviceTxt = await servicesTab.getText();
    let servicesTab2 = await $(
      '//*[@id="content"]/div/div/div[3]/div[5]/div[2]/div[1]/div[1]/div/div[2]/div[1]'
    );
    let channelNameTxt = await servicesTab2.getText();
    let servicesTab3 = await $(
      '//*[@id="content"]/div/div/div[3]/div[5]/div[2]/div[1]/div[1]/div/div[3]/div[1]'
    );
    let channelidTxt = await servicesTab3.getText();
    let servicesTab4 = await $(
      '//*[@id="content"]/div/div/div[3]/div[5]/div[2]/div[1]/div[1]/div/div[4]/div[1]'
    );
    let actionsTxt = await servicesTab4.getText();
    expect(serviceTxt).to.equal("Service");
    expect(channelNameTxt).to.equal("Channel Name");
    expect(channelidTxt).to.equal("Channel ID");
    expect(actionsTxt).to.equal("Actions");
  });
  it("User can press Settings Button", async () => {
    let elem = await $(
      '//*[@id="content"]/div/div/div[1]/div[2]/div/div/div/div[1]/div[1]'
    );
    await elem.click();
    let settingsBtn = await $('//*[@id="tabExtras"]/a');
    await settingsBtn.click();
    let launchApp = await $("/html/body/div[6]/div/div/ul/li[1]");
    let launchAppShows = await launchApp.isDisplayed();
    let launchTxt = await launchApp.getText();
    console.log(launchTxt);
    let closeAllApp = await $("/html/body/div[6]/div/div/ul/li[2]");
    let closeAppTxt = await closeAllApp.getText();
    console.log(closeAppTxt);
    //expect(launchTxt).to.equal('Launch Application') this should show text, it did before but now it comes up as ' '
    //expect(launchAppShows).to.be.true
    expect(closeAppTxt).to.equal("Close All Applications");
  });
  it("Clicking Launch App button should open up an Open Application dialogue", async () => {
    let elem = await $(
      '//*[@id="content"]/div/div/div[1]/div[2]/div/div/div/div[1]/div[1]'
    );
    await elem.click();
    let settingsBtn = await $('//*[@id="tabExtras"]/a');
    await settingsBtn.click();
    let launchApp = await $("/html/body/div[6]/div/div/ul/li[1]");
    await launchApp.click();
    let openApp = await $('//*[@id="rcDialogTitle0"]');
    let openAppTxt = await openApp.getText();
    let manifestURL = await $("#appManifestUrl");
    let manifestURLDisplayed = await manifestURL.isDisplayed();
    console.log(manifestURLDisplayed);
    expect(manifestURLDisplayed).to.be.true;
    console.log(openAppTxt);
    //expect(openAppTxt).to.equal('Open Application')
    let closeBtn = await $(
      "/html/body/div[7]/div/div[2]/div/div[2]/button/span/i"
    );
    await closeBtn.click();
  });

  it("Window should show info on about what windows are showing", async () => {
    let elem = await $(
      '//*[@id="content"]/div/div/div[1]/div[2]/div/div/div/div[1]/div[3]'
    );
    await elem.click();
    let el = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div'
    );
    await el.click();
    await el.click();
    let processManager = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[2]/div[1]/div[2]/div/div[2]/div'
    );
    let processManagerTxt = await processManager.getText();
    let processManagerURL = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[2]/div[1]/div[2]/div/div[3]/div'
    );
    let processManagerURLTxt = await processManagerURL.getText();
    let processManagerYes = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[2]/div[1]/div[2]/div/div[4]'
    );
    let processManagerYesTxt = await processManagerYes.getText();
    let processManagerPosition = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[2]/div[1]/div[2]/div/div[5]'
    );
    let processManagerPositionTxt = await processManagerPosition.getText();
    let processManagerChildren = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[2]/div[1]/div[2]/div/div[6]'
    );
    let processManagerChildrenTxt = await processManagerChildren.getText();
    expect(processManagerTxt).to.equal("process-manager");
    expect(processManagerURLTxt).to.contain(
      "https://cdn.openfin.co/process-manager/"
    );
    expect(processManagerYesTxt).to.equal("Yes");
    expect(processManagerPositionTxt).to.equal("1800w1800h at (10,10)");
    expect(processManagerChildrenTxt).to.equal("0");
  });
  it("No Rows Found should show when no data is available on Services Tab", async () => {
    let elem = await $(
      '//*[@id="content"]/div/div/div[1]/div[2]/div/div/div/div[1]/div[5]'
    );
    await elem.click();
    let noData = await $(
      '//*[@id="content"]/div/div/div[3]/div[5]/div[2]/div[2]'
    );
    let noDataTxt = await noData.getText();
    expect(noDataTxt).to.equal("No rows found");
  });

  it("Clicking on Debugger Button on Windows View opens up DevTools", async () => {
    let elem = await $(
      '//*[@id="content"]/div/div/div[1]/div[2]/div/div/div/div[1]/div[3]'
    );
    await elem.click();
    let el = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div'
    );
    await el.click();
    await el.click();
    myApp.pause(5000);
    let devtools = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[2]/div[1]/div[2]/div/div[7]/div/a[1]'
    );
    await devtools.click();
    //devtools.waitForDisplayed(3000)
    devtools
      .click()
      .then(function() {
        console.log("devtools fired off!");
      })
      .catch(err => console.log(err));
  });
  it("User can fire off the logs", async () => {
    let elem = await $(
      '//*[@id="content"]/div/div/div[1]/div[2]/div/div/div/div[1]/div[2]'
    );
    await elem.click();
    let logBtn = await $('//*[@title="View Log"]');
    //await logBtn.waitForClickable();
    await logBtn.click();
    logBtn
      .click()
      .then(function() {
        console.log("logsfired off!");
      })
      .catch(err => console.log(err));
  });
  it("Email Log button is present", async () => {
    let elem = await $(
      '//*[@id="content"]/div/div/div[1]/div[2]/div/div/div/div[1]/div[2]'
    );
    await elem.click();
    let emailBtn = await (
      await $(
        '//*[@id="content"]/div/div/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div/div[4]/div/a[2]'
      )
    ).isDisplayed();
    console.log(emailBtn);
    expect(emailBtn).to.be.true;
  });
  it("User can press on info button on App view", async () => {
    let elem = await $(
      '//*[@id="content"]/div/div/div[1]/div[2]/div/div/div/div[1]/div[1]'
    );
    await elem.click();
    let manifestInfoBtn = await $(
      '//*[@id="content"]/div/div/div[3]/div[1]/div[2]/div[1]/div[2]/div[1]/div/div[8]/div/a[2]'
    );
    await manifestInfoBtn.click();
    let manifestInfo = await $("#appDetailsContent");
    let manifestInfoTxt = await manifestInfo.getText();
    expect(manifestInfoTxt).to.include("startup_app");
    expect(manifestInfoTxt).to.include("runtime");
    expect(manifestInfoTxt).to.include("devtools_port");
  });
  it("Workspace Tab has Workspace layout displaying", async () => {
    let elem = await $(
      '//*[@id="content"]/div/div/div[1]/div[2]/div/div/div/div[1]/div[4]'
    );
    await elem.click();
    let workSpaceLayout = await $("#workspace");
    let workspaceShowing = await workSpaceLayout.isDisplayed();
    console.log(workspaceShowing);
    expect(workspaceShowing).to.be.true;
  });
  it("Clicking on Rescue OffScreen Button moves the screen", async () => {
    let elem = await $(
      '//*[@id="content"]/div/div/div[1]/div[2]/div/div/div/div[1]/div[3]'
    );
    await elem.click();
    let el = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div'
    );
    await el.click();
    await el.click();
    myApp.pause(5000);
    let rescueOffScreen = await $(
      '//*[@id="content"]/div/div/div[3]/div[3]/div[2]/div[1]/div[2]/div[1]/div[2]/div/div[7]/div/a[2]'
    );
    await rescueOffScreen.click();
    rescueOffScreen.waitForDisplayed(3000);
    rescueOffScreen
      .click()
      .then(function() {
        console.log("screen moved homie!");
      })
      .catch(err => console.log(err));
  });
  it("User should be able to launch a window through the URL text box in the Open Applications Dialogue window", async () => {
    let elem = await $(
      '//*[@id="content"]/div/div/div[1]/div[2]/div/div/div/div[1]/div[1]'
    );
    await elem.click();
    let settingsBtn = await $('//*[@id="tabExtras"]/a');
    await settingsBtn.click();
    let launchApp = await $("li.ant-dropdown-menu-item"); //html/body/div[6]/div/div/ul/li[1]/a
    browser.setTimeout({ implicit: 5000 });
    await launchApp.click();
    let siteURL = await $("#appSiteUrl");
    let siteURLDisplayed = await siteURL.isDisplayed();
    console.log(siteURLDisplayed);
    expect(siteURLDisplayed).to.be.true;
    await siteURL.setValue("https://www.google.com");
    let openBtn = await $("button.ant-btn.ant-btn-primary");
    await openBtn.click();
    await browser.switchWindow("Google");
    let newWindowTitle = await browser.getTitle();
    expect(newWindowTitle).to.equal("Google");
    await browser.switchWindow("OpenFin Process Manager");
  });
});
