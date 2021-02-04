export const initialState = {
        initialState: {
          "id": 3,
          "iss": 0,
          "city": "Petrópolis",
          "mail": "reservas@hotelpetropolisinn.com.br",
          "name": "Hotel Petrópolis Inn",
          "phone": "(24) 2237-1149 / (24) 2243-6710 ",
          "nearby": [
            {
              "name": "Armazém 646",
              "distance": "50m"
            },
            {
              "name": "Kinpai Sushi",
              "distance": "100m"
            },
            {
              "name": "Valmarché - Mercado",
              "distance": "100m"
            },
            {
              "name": "Japa Temaki",
              "distance": "100m"
            }
          ],
          "policy": [
            {
              "title": "Política de Crianças",
              "value": "Crianças são sempre bem-vindas! Crianças com 6 anos ou mais são consideradas adultos."
            },
            {
              "title": "Camas Extras e Berços",
              "value": "Nosso hotel dispõe de Camas extras e berços adicionais, por favor nos consulte por telefone ou WhatsApp para adicionar a sua reserva."
            },
            {
              "title": "Pagamento",
              "value": "Um cartão de crédito é necessário para reservar online e a cobrança será feita imediatamente no ato da reserva."
            },
            {
              "title": "Animais e Pets",
              "value": "Não aceitamos hospedagem de nenhum tipo de animal ou Pet visando a mair segurança e conforto de todos."
            }
          ],
          "region": "Rio de Janeiro",
          "logoURL": "https://resources.ayrton.net.br/hotelpetropolisinn/logo.svg",
          "location": "Petrópolis",
          "whatsapp": "https://wa.me/message/CN2VJLVRAZMPF1",
          "roomTypes": [
            {
              "id": 2,
              "name": "Quarto Executivo com  Varanda",
              "maxAdults": 2,
              "maxChildren": 1,
              "maxOccupants": 3,
              "channelManagerId": "e2d01d1e-d7d9-4a93-a6e3-7ff96e446302"
            },
            {
              "id": 1,
              "name": "Quarto Executivo",
              "maxAdults": 2,
              "maxChildren": 1,
              "maxOccupants": 3,
              "channelManagerId": "95ce84c3-2dbc-4c81-ae6c-1961a6f445bb"
            },
            {
              "id": 3,
              "name": "Quarto Superior",
              "maxAdults": 2,
              "maxChildren": 1,
              "maxOccupants": 3,
              "channelManagerId": "d0fd8720-f935-487a-bfe9-0a21bd255502"
            },
            {
              "id": 4,
              "name": "Suíte Master Panorâmica",
              "maxAdults": 2,
              "maxChildren": 2,
              "maxOccupants": 4,
              "channelManagerId": "77930298-5010-4b75-a02c-c01c247271fa"
            }
          ],
          "thumbnail": "https://ayrtonresources.s3-sa-east-1.amazonaws.com/hotelpetropolisinn/thubnail.png",
          "ammenities": {
            "tv": true,
            "wifi": true,
            "parking": true,
            "elevator": true,
            "breakfast": true,
            "event_room": true,
            "hair_dryer": true,
            "free_parking": true,
            "coffee_machine": true,
            "public_parking": true,
            "air_conditioning": true
          },
          "heroImages": [
            "https://resources.ayrton.net.br/hotelpetropolisinn/hero1.png",
            "https://resources.ayrton.net.br/hotelpetropolisinn/hero2.png",
            "https://resources.ayrton.net.br/hotelpetropolisinn/hero3.png",
            "https://resources.ayrton.net.br/hotelpetropolisinn/hero4.png",
            "https://resources.ayrton.net.br/hotelpetropolisinn/hero5.png",
            "https://resources.ayrton.net.br/hotelpetropolisinn/hero6.png",
            "https://resources.ayrton.net.br/hotelpetropolisinn/hero7.png",
            "https://resources.ayrton.net.br/hotelpetropolisinn/hero8.png",
            "https://resources.ayrton.net.br/hotelpetropolisinn/hero9.png",
            "https://resources.ayrton.net.br/hotelpetropolisinn/hero10.png",
            "https://resources.ayrton.net.br/hotelpetropolisinn/hero11.png",
            "https://resources.ayrton.net.br/hotelpetropolisinn/hero12.png",
            "https://resources.ayrton.net.br/hotelpetropolisinn/hero13.png"
          ],
          "checkInTime": "Apartir das 14 horas",
          "facebookURL": "https://www.facebook.com/petropolisinn",
          "checkOutTime": "Até as 12 horas.",
          "instagramURL": "https://www.instagram.com/hotelpetropolisinn/",
          "maxParcelCount": 4,
          "minParcelValue": 250,
          "roomTypeImages": {
            "Quarto Superior": [
              "https://resources.ayrton.net.br/hotelpetropolisinn/sup1.png",
              "https://resources.ayrton.net.br/hotelpetropolisinn/sup2.png"
            ],
            "Quarto Executivo": [
              "https://resources.ayrton.net.br/hotelpetropolisinn/exec1.png",
              "https://resources.ayrton.net.br/hotelpetropolisinn/exec2.png",
              "https://resources.ayrton.net.br/hotelpetropolisinn/exec3.png"
            ],
            "Suíte Master Panorâmica": [
              "https://resources.ayrton.net.br/hotelpetropolisinn/master1.png",
              "https://resources.ayrton.net.br/hotelpetropolisinn/master2.png",
              "https://resources.ayrton.net.br/hotelpetropolisinn/master3.png",
              "https://resources.ayrton.net.br/hotelpetropolisinn/master4.png"
            ],
            "Quarto Executivo com  Varanda": [
              "https://resources.ayrton.net.br/hotelpetropolisinn/var1.png",
              "https://resources.ayrton.net.br/hotelpetropolisinn/var2.png"
            ]
          },
          "whatsappNumber": "+55 24 98839-7210",
          "requiresPayment": true,
          "completeLocation": "Rua Vinte e Nove de Junho 491, Valparaíso, Petrópolis, RJ, Brasil CEP: 25655-091",
          "cancelationPolicy": [
            "Para oferecer a melhor opção de compra, nossas reservas não são reembonsáveis."
          ],
          "googleMapsEmbedSRC": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.678589238404!2d-43.19471638423781!3d-22.516239185211802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x990814eb909701%3A0x16b9181d3ed75a2a!2sHOTEL%20PETROPOLIS%20INN!5e0!3m2!1spt-BR!2sbr!4v1601673586235!5m2!1spt-BR!2sbr",
          "roomTypeDescription": {
            "1": "Conforto e modernindade para aproveitar a cidade imperial como o Imperador fazia!",
            "2": "Luxo de nosso Hotel com uma varanda.",
            "3": "Conforto para sua familia ter uma experiência Imperial.",
            "4": "Suite com muito espaço e confonto e uma vista impecável de Petrópolis."
          },
          "offersDirectDiscount": true,
          "occupancyPolicy": {
            "maxChildAge": 6,
            "minChildAge": 6
          }
        }
}