// Placeholder – you’d integrate a real crop-prices API here.
exports.getRates = async (req, res) => {
    // e.g. fetch from an external service
    res.json({
      wheat: 2000,      // INR/quintal
      rice: 1800,
      maize: 1500,
    });
  };
  