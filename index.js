require("dotenv").config();
const { default: axios } = require("axios");
const { dataUser } = require("./dataUser");
const { apiUrl } = require("./apiUrl");
const { sensorName } = require("./utils/sensorName");

const sendTransactionData = async (userData, token) => {
  try {
    const response = await axios.post(
      apiUrl,
      {
        products: [
          {
            productId: "faf3abd6-1f29-4bf1-85cb-b8f243cada9d",
            quantity: 2,
          },
        ],
        geoTagging: "",
        inputNominal: 38000,
        change: 0,
        paymentType: "cash",
        subsidi: {
          nik: userData.noKTP,
          IDValidation: "",
          category: "Rumah Tangga",
          sourceTypeId: 99,
          nama: sensorName(userData.name),
          noHandPhoneKPM: "-",
          channelInject: "maplite",
          pengambilanItemSubsidi: [
            {
              item: "ELPIJI",
              quantitas: 2,
              potongan_harga: 0,
            },
          ],
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error sending transaction data:", error.message);
  }
};

dataUser.forEach((user) => {
  sendTransactionData(user, process.env.TOKEN);
});
