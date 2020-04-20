import React, { Component } from "react"
import PropTypes from "prop-types"
import ChatBot from "react-simple-chatbot"
import { ThemeProvider } from "styled-components"


const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica",
  headerBgColor: "#6d3dff",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#6d3dff",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a"
};

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      age: "",
      mail: ""
    };

    console.log(this.state);
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age, mail } = steps;

    this.setState({ name, gender, age, mail });
  }

  render() {
    const { name, gender, age, mail } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Geschlecht</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Alter</td>
              <td>{age.value}</td>
            </tr>
            <tr>
              <td>E-Mail</td>
              <td>{mail.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object
};

Review.defaultProps = {
  steps: undefined
};

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class SimpleForm extends Component {
  componentDidMount() {
    this.handleEnd = this.handleEnd.bind(this);
  }

  handleEnd({ steps, values }) {
    // console.log(steps);
    // console.log(values);
    alert(`Chat handleEnd callback! Number: ${values[(0, 1, 2, 3)]}`);
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <ChatBot
            handleEnd={this.handleEnd}
            steps={[
              {
                id: "1",
                message: "Bitte nenne mir deinen Namen!",
                trigger: "name"
              },
              {
                id: "name",
                user: true,
                trigger: "3"
              },
              {
                id: "3",
                message: "Hallo {previousValue}, bist du...",
                trigger: "gender"
              },
              {
                id: "gender",
                options: [
                  { value: "male", label: "Männlich", trigger: "5" },
                  { value: "female", label: "Weiblich", trigger: "5" }
                ]
              },
              {
                id: "5",
                message: "Wie alt bist du?",
                trigger: "age"
              },
              {
                id: "age",
                user: true,
                trigger: "7",
                validator: value => {
                  if (isNaN(value)) {
                    return "Bitte gib eine Zahl ein.";
                  } else if (value < 0) {
                    return "Die Zahl muss positive sein.";
                  } else if (value > 120) {
                    return `${value}? Komm schon...`;
                  }

                  return true;
                }
              },
              {
                id: "7",
                message: "Wie lautet deine E-Mail Adresse?",
                trigger: "mail"
              },
              {
                id: "mail",
                user: true,
                trigger: "9",
                validator: value => {
                  if (emailRegex.test(value) === false) {
                    return "Bitte gib eine gültige E-Mail Adresse ein.";
                  }
                  return true;
                }
              },
              {
                id: "9",
                message: "Super! Hier ist deine Zusammenfassung",
                trigger: "review"
              },
              {
                id: "review",
                component: <Review />,
                asMessage: true,
                trigger: "update"
              },
              {
                id: "update",
                message: "Möchtest du etwas ändern?",
                trigger: "update-question"
              },
              {
                id: "update-question",
                options: [
                  { value: "yes", label: "Ja", trigger: "update-yes" },
                  { value: "no", label: "Nein", trigger: "end-message" }
                ]
              },
              {
                id: "update-yes",
                message: "Welches Feld möchtest du gerne ändern?",
                trigger: "update-fields"
              },
              {
                id: "update-fields",
                options: [
                  { value: "name", label: "Name", trigger: "update-name" },
                  {
                    value: "gender",
                    label: "Geschlecht",
                    trigger: "update-gender"
                  },
                  { value: "age", label: "Alter", trigger: "update-age" },
                  { value: "email", label: "E-Mail", trigger: "update-email" }
                ]
              },
              {
                id: "update-name",
                update: "name",
                trigger: "9"
              },
              {
                id: "update-gender",
                update: "gender",
                trigger: "9"
              },
              {
                id: "update-age",
                update: "age",
                trigger: "9"
              },
              {
                id: "update-email",
                update: "email",
                trigger: "9"
              },
              {
                id: "end-message",
                message: "Danke! Deine Daten wurden erfolgreich übermittelt",
                end: true
              }
            ]}
          />
        </ThemeProvider>
        <p>{JSON.stringify(this.states, null, 2)}</p>
      </div>
    );
  }
}

export default SimpleForm