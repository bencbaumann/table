import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MaterializeTable from './components/materializeTable';

class App extends Component {

  constructor(){
    super();
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  state = {
    columns: [
      {
        header: "Salary",
        value: "salary",
        canEdit: true,
        handleUpdate: this.handleUpdate
      },
      {
        header: "Name",
        value: "first_name"
      },
      {
        header: "Position",
        value: "position",
        canEdit: true,
        handleUpdate: this.handleUpdate
      },
      {
        header: "Age",
        value: "age"
      }

    ],
    data: [{
      "id": 1,
      "first_name": "Gerrard",
      "last_name": "Gipp",
      "age": 4,
      "position": "Software Test Engineer II",
      "salary": "$45525.98"
    }, {
      "id": 2,
      "first_name": "Justino",
      "last_name": "Kilfedder",
      "age": 35,
      "position": "Professor",
      "salary": "$40590.60"
    }, {
      "id": 3,
      "first_name": "Devin",
      "last_name": "McCurley",
      "age": 32,
      "position": "Payment Adjustment Coordinator",
      "salary": "$29445.68"
    }, {
      "id": 4,
      "first_name": "Rani",
      "last_name": "Boyson",
      "age": 99,
      "position": "Design Engineer",
      "salary": "$25524.33"
    }, {
      "id": 5,
      "first_name": "Humfried",
      "last_name": "Normanvell",
      "age": 33,
      "position": "Assistant Manager",
      "salary": "$28608.08"
    }, {
      "id": 6,
      "first_name": "Kaitlyn",
      "last_name": "Goosnell",
      "age": 66,
      "position": "Staff Scientist",
      "salary": "$42961.46"
    }, {
      "id": 7,
      "first_name": "Boyce",
      "last_name": "Romagosa",
      "age": 9,
      "position": "Administrative Officer",
      "salary": "$42765.88"
    }, {
      "id": 8,
      "first_name": "Maurene",
      "last_name": "Jeannon",
      "age": 58,
      "position": "Financial Analyst",
      "salary": "$33307.60"
    }, {
      "id": 9,
      "first_name": "Burk",
      "last_name": "Bremeyer",
      "age": 84,
      "position": "Office Assistant IV",
      "salary": "$49743.19"
    }, {
      "id": 10,
      "first_name": "Niki",
      "last_name": "Carlo",
      "age": 75,
      "position": "Compensation Analyst",
      "salary": "$36429.82"
    }, {
      "id": 11,
      "first_name": "Sloane",
      "last_name": "Basler",
      "age": 82,
      "position": "Web Designer I",
      "salary": "$44650.58"
    }, {
      "id": 12,
      "first_name": "Jarred",
      "last_name": "Geeve",
      "age": 41,
      "position": "Analog Circuit Design manager",
      "salary": "$20152.37"
    }, {
      "id": 13,
      "first_name": "Ddene",
      "last_name": "Drayton",
      "age": 55,
      "position": "Research Associate",
      "salary": "$45841.94"
    }, {
      "id": 14,
      "first_name": "Ronnica",
      "last_name": "Moralas",
      "age": 37,
      "position": "Account Coordinator",
      "salary": "$29236.62"
    }, {
      "id": 15,
      "first_name": "Darcy",
      "last_name": "Eblein",
      "age": 59,
      "position": "Nurse Practicioner",
      "salary": "$23313.91"
    }, {
      "id": 16,
      "first_name": "Dunstan",
      "last_name": "Brozek",
      "age": 96,
      "position": "Database Administrator IV",
      "salary": "$28011.46"
    }, {
      "id": 17,
      "first_name": "Amil",
      "last_name": "Douche",
      "age": 53,
      "position": "Clinical Specialist",
      "salary": "$34873.11"
    }, {
      "id": 18,
      "first_name": "Kizzee",
      "last_name": "Till",
      "age": 47,
      "position": "Automation Specialist I",
      "salary": "$47123.96"
    }, {
      "id": 19,
      "first_name": "Clarisse",
      "last_name": "Imm",
      "age": 45,
      "position": "GIS Technical Architect",
      "salary": "$22436.73"
    }, {
      "id": 20,
      "first_name": "Walsh",
      "last_name": "Pipkin",
      "age": 7,
      "position": "Internal Auditor",
      "salary": "$20058.47"
    }, {
      "id": 21,
      "first_name": "Maurice",
      "last_name": "Armes",
      "age": 54,
      "position": "Financial Advisor",
      "salary": "$31722.07"
    }, {
      "id": 22,
      "first_name": "Reider",
      "last_name": "Spenley",
      "age": 85,
      "position": "Associate Professor",
      "salary": "$43825.98"
    }, {
      "id": 23,
      "first_name": "Helena",
      "last_name": "Scotson",
      "age": 61,
      "position": "VP Marketing",
      "salary": "$31539.89"
    }, {
      "id": 24,
      "first_name": "Nalani",
      "last_name": "Tyson",
      "age": 87,
      "position": "Design Engineer",
      "salary": "$31470.88"
    }, {
      "id": 25,
      "first_name": "Jonell",
      "last_name": "O'Neal",
      "age": 35,
      "position": "Software Consultant",
      "salary": "$34294.95"
    }, {
      "id": 26,
      "first_name": "Staford",
      "last_name": "Simondson",
      "age": 55,
      "position": "Recruiter",
      "salary": "$44643.52"
    }, {
      "id": 27,
      "first_name": "Kerianne",
      "last_name": "Norker",
      "age": 19,
      "position": "Statistician I",
      "salary": "$33142.64"
    }, {
      "id": 28,
      "first_name": "Anastasie",
      "last_name": "Stutt",
      "age": 56,
      "position": "Occupational Therapist",
      "salary": "$44767.50"
    }, {
      "id": 29,
      "first_name": "Mic",
      "last_name": "Risman",
      "age": 74,
      "position": "Programmer I",
      "salary": "$43041.23"
    }, {
      "id": 30,
      "first_name": "Josh",
      "last_name": "Corkhill",
      "age": 30,
      "position": "VP Accounting",
      "salary": "$26668.09"
    }, {
      "id": 31,
      "first_name": "Emlynne",
      "last_name": "Lichfield",
      "age": 20,
      "position": "Developer II",
      "salary": "$27563.31"
    }, {
      "id": 32,
      "first_name": "Jo",
      "last_name": "Phillpotts",
      "age": 66,
      "position": "Senior Developer",
      "salary": "$36722.63"
    }, {
      "id": 33,
      "first_name": "Jenda",
      "last_name": "Klich",
      "age": 60,
      "position": "Professor",
      "salary": "$22208.28"
    }, {
      "id": 34,
      "first_name": "Oona",
      "last_name": "Yitzhakov",
      "age": 49,
      "position": "Administrative Officer",
      "salary": "$35677.78"
    }, {
      "id": 35,
      "first_name": "Nikaniki",
      "last_name": "Mannock",
      "age": 83,
      "position": "Biostatistician II",
      "salary": "$31314.42"
    }, {
      "id": 36,
      "first_name": "Rene",
      "last_name": "Gregory",
      "age": 72,
      "position": "Assistant Manager",
      "salary": "$28948.50"
    }, {
      "id": 37,
      "first_name": "Geordie",
      "last_name": "Angerstein",
      "age": 65,
      "position": "Financial Analyst",
      "salary": "$45278.86"
    }, {
      "id": 38,
      "first_name": "Fraser",
      "last_name": "Linnitt",
      "age": 7,
      "position": "Financial Analyst",
      "salary": "$21027.38"
    }, {
      "id": 39,
      "first_name": "Christy",
      "last_name": "Chater",
      "age": 88,
      "position": "Health Coach III",
      "salary": "$38490.93"
    }, {
      "id": 40,
      "first_name": "Sharon",
      "last_name": "Rembrandt",
      "age": 88,
      "position": "Staff Accountant IV",
      "salary": "$35664.43"
    }, {
      "id": 41,
      "first_name": "Aubrey",
      "last_name": "Stobbart",
      "age": 29,
      "position": "Computer Systems Analyst II",
      "salary": "$48357.73"
    }, {
      "id": 42,
      "first_name": "Cassi",
      "last_name": "Keirle",
      "age": 6,
      "position": "Human Resources Assistant IV",
      "salary": "$38536.66"
    }, {
      "id": 43,
      "first_name": "Henrik",
      "last_name": "Santora",
      "age": 90,
      "position": "Compensation Analyst",
      "salary": "$20217.50"
    }, {
      "id": 44,
      "first_name": "Minne",
      "last_name": "Renfield",
      "age": 83,
      "position": "Analog Circuit Design manager",
      "salary": "$26200.52"
    }, {
      "id": 45,
      "first_name": "Shaughn",
      "last_name": "Ronchi",
      "age": 86,
      "position": "Marketing Assistant",
      "salary": "$21175.03"
    }, {
      "id": 46,
      "first_name": "Mellie",
      "last_name": "Rickets",
      "age": 98,
      "position": "VP Quality Control",
      "salary": "$28830.00"
    }, {
      "id": 47,
      "first_name": "Ginnie",
      "last_name": "MacCaffery",
      "age": 77,
      "position": "Paralegal",
      "salary": "$26676.11"
    }, {
      "id": 48,
      "first_name": "Gail",
      "last_name": "Coke",
      "age": 61,
      "position": "Cost Accountant",
      "salary": "$41124.75"
    }, {
      "id": 49,
      "first_name": "Duff",
      "last_name": "Harsent",
      "age": 41,
      "position": "Biostatistician IV",
      "salary": "$30916.43"
    }, {
      "id": 50,
      "first_name": "Bettina",
      "last_name": "Spybey",
      "age": 90,
      "position": "Structural Engineer",
      "salary": "$46732.59"
    }, {
      "id": 51,
      "first_name": "Maxwell",
      "last_name": "Dorber",
      "age": 82,
      "position": "Information Systems Manager",
      "salary": "$42041.21"
    }, {
      "id": 52,
      "first_name": "Port",
      "last_name": "Brydon",
      "age": 47,
      "position": "Web Developer I",
      "salary": "$48517.32"
    }, {
      "id": 53,
      "first_name": "Sheena",
      "last_name": "Belz",
      "age": 73,
      "position": "Media Manager II",
      "salary": "$31506.84"
    }, {
      "id": 54,
      "first_name": "Nobe",
      "last_name": "Colley",
      "age": 91,
      "position": "VP Quality Control",
      "salary": "$38639.34"
    }, {
      "id": 55,
      "first_name": "Korey",
      "last_name": "Aimson",
      "age": 100,
      "position": "Quality Control Specialist",
      "salary": "$49475.79"
    }, {
      "id": 56,
      "first_name": "Mina",
      "last_name": "Ruppertz",
      "age": 72,
      "position": "Director of Sales",
      "salary": "$40257.46"
    }, {
      "id": 57,
      "first_name": "Anetta",
      "last_name": "Wickey",
      "age": 15,
      "position": "Speech Pathologist",
      "salary": "$47687.45"
    }, {
      "id": 58,
      "first_name": "Allyson",
      "last_name": "Aizikovich",
      "age": 23,
      "position": "Biostatistician II",
      "salary": "$22589.01"
    }, {
      "id": 59,
      "first_name": "Gerti",
      "last_name": "Monsey",
      "age": 51,
      "position": "Help Desk Technician",
      "salary": "$26927.72"
    }, {
      "id": 60,
      "first_name": "Sibel",
      "last_name": "MacShane",
      "age": 39,
      "position": "Environmental Specialist",
      "salary": "$43445.65"
    }, {
      "id": 61,
      "first_name": "Madalyn",
      "last_name": "Lartice",
      "age": 53,
      "position": "Mechanical Systems Engineer",
      "salary": "$30609.66"
    }, {
      "id": 62,
      "first_name": "Faun",
      "last_name": "Boundey",
      "age": 93,
      "position": "Project Manager",
      "salary": "$35360.70"
    }, {
      "id": 63,
      "first_name": "Benedick",
      "last_name": "Riditch",
      "age": 91,
      "position": "Office Assistant I",
      "salary": "$24920.82"
    }, {
      "id": 64,
      "first_name": "Beatrice",
      "last_name": "Kydde",
      "age": 97,
      "position": "Biostatistician II",
      "salary": "$43378.30"
    }, {
      "id": 65,
      "first_name": "Tera",
      "last_name": "MacAne",
      "age": 70,
      "position": "Accountant II",
      "salary": "$49842.77"
    }, {
      "id": 66,
      "first_name": "Tomas",
      "last_name": "Kingham",
      "age": 85,
      "position": "Junior Executive",
      "salary": "$35488.55"
    }, {
      "id": 67,
      "first_name": "Catharine",
      "last_name": "Dulin",
      "age": 62,
      "position": "Quality Engineer",
      "salary": "$28156.03"
    }, {
      "id": 68,
      "first_name": "Davy",
      "last_name": "Price",
      "age": 34,
      "position": "Media Manager III",
      "salary": "$41597.52"
    }, {
      "id": 69,
      "first_name": "Cris",
      "last_name": "Couves",
      "age": 22,
      "position": "Financial Analyst",
      "salary": "$37393.83"
    }, {
      "id": 70,
      "first_name": "Patten",
      "last_name": "Kirkbright",
      "age": 4,
      "position": "Programmer Analyst IV",
      "salary": "$36639.09"
    }, {
      "id": 71,
      "first_name": "Rodina",
      "last_name": "Happs",
      "age": 68,
      "position": "Engineer III",
      "salary": "$45342.36"
    }, {
      "id": 72,
      "first_name": "Paxton",
      "last_name": "Mackney",
      "age": 65,
      "position": "Account Coordinator",
      "salary": "$33506.37"
    }, {
      "id": 73,
      "first_name": "Marena",
      "last_name": "Manass",
      "age": 64,
      "position": "Recruiter",
      "salary": "$44973.34"
    }, {
      "id": 74,
      "first_name": "Jeddy",
      "last_name": "Heighton",
      "age": 28,
      "position": "Data Coordiator",
      "salary": "$34400.85"
    }, {
      "id": 75,
      "first_name": "Livvyy",
      "last_name": "Judkin",
      "age": 92,
      "position": "Registered Nurse",
      "salary": "$37402.69"
    }, {
      "id": 76,
      "first_name": "Goldina",
      "last_name": "Polglase",
      "age": 31,
      "position": "Human Resources Manager",
      "salary": "$47764.96"
    }, {
      "id": 77,
      "first_name": "Violette",
      "last_name": "Ledley",
      "age": 95,
      "position": "Civil Engineer",
      "salary": "$20632.62"
    }, {
      "id": 78,
      "first_name": "Josiah",
      "last_name": "Baudassi",
      "age": 57,
      "position": "Web Designer IV",
      "salary": "$24894.00"
    }, {
      "id": 79,
      "first_name": "Alexis",
      "last_name": "Gallehock",
      "age": 46,
      "position": "Compensation Analyst",
      "salary": "$25905.19"
    }, {
      "id": 80,
      "first_name": "Dyanne",
      "last_name": "Ledington",
      "age": 7,
      "position": "Food Chemist",
      "salary": "$22414.93"
    }, {
      "id": 81,
      "first_name": "Kristo",
      "last_name": "Cleyne",
      "age": 56,
      "position": "Web Designer I",
      "salary": "$37695.56"
    }, {
      "id": 82,
      "first_name": "Imelda",
      "last_name": "Inett",
      "age": 77,
      "position": "VP Accounting",
      "salary": "$31561.16"
    }, {
      "id": 83,
      "first_name": "Elyse",
      "last_name": "Soltan",
      "age": 80,
      "position": "Account Executive",
      "salary": "$38675.58"
    }, {
      "id": 84,
      "first_name": "Lew",
      "last_name": "Cucinotta",
      "age": 23,
      "position": "Structural Engineer",
      "salary": "$40192.16"
    }, {
      "id": 85,
      "first_name": "Terrell",
      "last_name": "Pook",
      "age": 80,
      "position": "Recruiting Manager",
      "salary": "$25242.09"
    }, {
      "id": 86,
      "first_name": "Lonny",
      "last_name": "Sleany",
      "age": 35,
      "position": "Dental Hygienist",
      "salary": "$30447.01"
    }, {
      "id": 87,
      "first_name": "Hyman",
      "last_name": "Cristofol",
      "age": 73,
      "position": "Nurse",
      "salary": "$49791.00"
    }, {
      "id": 88,
      "first_name": "Pris",
      "last_name": "Derby",
      "age": 25,
      "position": "Office Assistant III",
      "salary": "$20529.90"
    }, {
      "id": 89,
      "first_name": "Gaston",
      "last_name": "Borton",
      "age": 10,
      "position": "Marketing Manager",
      "salary": "$31139.84"
    }, {
      "id": 90,
      "first_name": "Ranice",
      "last_name": "Benbough",
      "age": 22,
      "position": "Data Coordiator",
      "salary": "$26233.28"
    }, {
      "id": 91,
      "first_name": "Jaine",
      "last_name": "Buche",
      "age": 70,
      "position": "Quality Engineer",
      "salary": "$49581.00"
    }, {
      "id": 92,
      "first_name": "Avie",
      "last_name": "Davydychev",
      "age": 83,
      "position": "Pharmacist",
      "salary": "$45792.12"
    }, {
      "id": 93,
      "first_name": "Domini",
      "last_name": "Guirard",
      "age": 98,
      "position": "Web Designer III",
      "salary": "$32531.38"
    }, {
      "id": 94,
      "first_name": "Kingsly",
      "last_name": "Strutz",
      "age": 2,
      "position": "Biostatistician IV",
      "salary": "$34223.78"
    }, {
      "id": 95,
      "first_name": "Robers",
      "last_name": "Jenson",
      "age": 27,
      "position": "Clinical Specialist",
      "salary": "$48959.06"
    }, {
      "id": 96,
      "first_name": "Merna",
      "last_name": "Charville",
      "age": 18,
      "position": "Administrative Assistant IV",
      "salary": "$49939.61"
    }, {
      "id": 97,
      "first_name": "Nady",
      "last_name": "Leechman",
      "age": 72,
      "position": "Occupational Therapist",
      "salary": "$31486.53"
    }, {
      "id": 98,
      "first_name": "Christie",
      "last_name": "Castanie",
      "age": 29,
      "position": "Physical Therapy Assistant",
      "salary": "$41138.38"
    }, {
      "id": 99,
      "first_name": "Major",
      "last_name": "Cottel",
      "age": 47,
      "position": "Assistant Professor",
      "salary": "$23449.03"
    }, {
      "id": 100,
      "first_name": "Clywd",
      "last_name": "Perott",
      "age": 57,
      "position": "VP Product Management",
      "salary": "$32537.97"
    }]
  }

  handleUpdate(val){
    console.log(val);
  }

  render() {
    return (
        <MaterializeTable
          title="Fabulous Table"
          columns={this.state.columns}
          data={this.state.data}
        />
    );
  }
}

export default App;
