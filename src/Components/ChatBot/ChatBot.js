import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const BotRedirect = ({ url, message }) => {
  return (
    <div>
      <a style={{'color':'#785BF4'}} href={url} target="_blank">
        {message}
      </a>
    </div>
  );
};

const CHATBOT_THEME = {
  background: "#FFFEFC",
  fontFamily: "Roboto",
  headerBgColor: "#FFBFB5",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#C8D7C2",
  botFontColor: "#fff",
  userBubbleColor: "#FFBFB5",
  userFontColor: "#fff"
};

const ChatBotElement = () => {
  const steps = [
    {
      id: "1",
      message: "Salam!",
      trigger: "2"
    },
    {
      id: "2",
      message: "Sizə necə kömək edə bilərik?",
      trigger: "3"
    },
    {
      id: "3",
      options: [
        { value: 1, label: "Vakansiyaları göstər", trigger: "4" },
        { value: 2, label: "Şirkətləri göstər", trigger: "5" },
        { value: 3, label: "Kateqoriyaları göstər", trigger: "6" },
        // { value: 4, label: "Adminlə Əlaqə", trigger: "7" }

      ]
    },
    {
      id: "4",
      component: (
        <BotRedirect
          message="Bütün Vakansiyaları Göstər"
          url="http://localhost:3000/job"
        />
      ),
      trigger: "2"
    },
    {
        id: "5",
        component: (
          <BotRedirect
            message="Bütün Şirkətləri Göstər"
            url="http://localhost:3000/company"
          />
        ),
        trigger: "2"
      },
      {
        id: "6",
        component: (
          <BotRedirect
            message="Bütün Kateqoriyaları Göstər"
            url="http://localhost:3000/category"
          />
        ),
        trigger: "2"
      }
    // {
    //   id: "7",
    //   component: (
    //     <BotRedirect
    //       message="See chatbot API here"
    //       url="https://lucasbassetti.com.br/react-simple-chatbot/#/docs/chatbot"
    //     />
    //   ),
    //   trigger: "2"
    // }
  ];

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot steps={steps} floating={true} />
      </ThemeProvider>
    </>
  );
};

export default ChatBotElement;
