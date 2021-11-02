const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

let message = "";

app.get("/", (req, res) => {
    const devList = ["Backend", "Frontend", "Fullstack"];
    const analyticsList = ["Engenharia de dados", "Ciência de dados"];
    
    setTimeout(() => {
      message = "";
    }, 1000);
    
    res.render("index", {
      titulo: "Times",
      devList: devList,
      analyticsList: analyticsList,
      message, musica
    });
  });

app.post("/subscription", (req, res) => {
    const { nome, email } = req.body;
    message = `Parabéns ${nome}, sua inscrição foi realizada com sucesso! Um e-mail foi enviado para: ${email}`;
    res.redirect("/");
  });

const musica = [{id: 1, nome: "Corinthians", 
           descricao: "O Sport Club Corinthians Paulista é um clube multiesportivo brasileiro da cidade de São Paulo, capital do estado homônimo. Foi fundado como uma equipe de futebol no dia 1 de setembro de 1910 por um grupo de operários do bairro Bom Retiro.", 
           imagem: "https://i1.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/2016/11/escudo-Corinthians.png?resize=512%2C512&ssl=1"},
           {id: 2, nome: "Paris Saint-Germain", 
           descricao: "O Paris Saint-Germain Football Club, também conhecido como Paris Saint-Germain ou pela sua sigla 'PGJ', é um clube de futebol profissional da França com sede em Paris. Suas cores são as cores tradicionais da cidade de Paris, o azul e o vermelho, e de Saint-Germain, distrito nos arredores de Paris, branco.", 
           imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-7RfAHmChm6ri0EwohUUg0xyxGTQ9gqFYbywPv79t5eYz_Uhk9TupyELbaH2Tz7xVtw&usqp=CAU"}
 ]

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);