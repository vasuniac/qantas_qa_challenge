import * as weather_api_helper from '../../support/helpers/ApiHelper';

describe("Verify the Weather API", () => {
    var key = Cypress.env("WEATHER_API_KEY")
    var testdataset_cordinates = [
        {"lat":-34,"lon":151,"city_name":"Menai"},
        {"lat":34,"lon":151,"city_name":"Hasaki"},
        {"lat":-34,"lon":-150,"city_name":"Moerai"},
        {"lat":34,"lon":-153,"city_name":"Kahuku"},
        {"lat":0,"lon":0,"city_name":"Takoradi"}
    ];
    var testdataset_postal_code = [
        {
            "input": {"postal_code":"28546","key":key},
            "output": {"status":200}
        },
        {
            "input": {"postal_code":"0","key":key},
            "output": {"status":204}
        },
        {
            "input": {"postal_code":"28546","country":"AU","key":key},
            "output": {"status":200}
        },
        {
            "input": {"postal_code":"","key":key},
            "output": {"status":400}
        }
    ]

    testdataset_cordinates.forEach((testdata) => {
        it("returns weather data based on co-ordinates" + testdata.lat + " and " + testdata.lon, () => {
            let query_params = {
                "lat": testdata.lat,
                "lon": testdata.lon,
                "key": key
            }
            cy.wrap({data:weather_api_helper.get_weather_data(query_params)}).its('data')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data).to.have.length(1)
                expect(response.body.data[0]).to.have.property('weather')
                expect(response.body.data[0].city_name).to.eq(testdata.city_name)
              })
        })
    })

    testdataset_postal_code.forEach((testdata,indx) => {
        it("returns weather data based on postal code - Scenario: " + indx, () => {
            cy.wrap({data:weather_api_helper.get_weather_data(testdata.input)}).its('data')
            .then((response) => {
                expect(response.status).to.eq(testdata.output.status)
                expect(response.body).to.not.have.property('minutely')
              })
        })
    })


    it("successfully returns data with all params specified", () => {
        var query_params = {"postal_code":"28546", "country":"US", "include":"minutely", "marine":"t","units": "S", "lang":"fr", "key":key}
        cy.wrap({data:weather_api_helper.get_weather_data(query_params)}).its('data')
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('minutely')
          })
    })


})