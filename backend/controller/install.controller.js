const installService = require("../services/install.service");
async function installDirectFromApi(req, res) {
  try {
    const installationStatus = await installService.installDirectFromApi();
    console.log(installationStatus);
    if (installationStatus) {
      const response = {
        status: "success",
        message: "Installation successful",
      };
      res.status(200).json(response);
    } else {
      const response = {
        status: "failure",
        message: "Installation failed",
      };
      res.status(403).json(response);
    }
  } catch (error) {
    console.error("Error during installation:", error);
    res.status(500).json({
      status: "error",
      message: "Installation failed",
    });
  }
}
module.exports = { installDirectFromApi };
