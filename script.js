const databases = [
  {
    name: "Sierra Leone",
    description: "The classic demo database for DHIS2",
    objectCounts: {
      indicator: 77,
      period: 384,
      visualization: 293,
      programStageInstance: 423663,
      organisationUnit: 1332,
      validationRule: 37,
      dataValue: 4935075,
      dataElement: 1037,
      program: 14,
      organisationUnitGroup: 18,
      trackedEntityInstance: 73124,
      programInstance: 73152,
      indicatorType: 5,
      eventVisualization: 51,
      user: 131,
      map: 92,
      userGroup: 35,
      indicatorGroup: 17,
      dataSet: 26,
      dataElementGroup: 84,
      dashboard: 27
    }
  },
  {
    name: "HMIS",
    description: "The metadata package collection",
    objectCounts: {
      indicator: 2009,
      period: 680,
      visualization: 1511,
      programStageInstance: 219743,
      organisationUnit: 1553,
      validationRule: 616,
      dataValue: 26091352,
      dataElement: 2858,
      program: 15,
      organisationUnitGroup: 112,
      trackedEntityInstance: 30780,
      programInstance: 27126,
      indicatorType: 6,
      eventVisualization: 51,
      user: 57,
      dataSet: 83,
      dataElementGroup: 89,
      userGroup: 84,
      map: 374,
      indicatorGroup: 88,
      dashboard: 144
    }
  },
  {
    name: "Performance",
    description: "A generated database for performance testing",
    objectCounts: {
      indicator: 186,
      period: 1283,
      visualization: 113,
      programStageInstance: 25928076,
      organisationUnit: 21965,
      validationRule: 15,
      dataValue: 65180688,
      dataElement: 448,
      program: 6,
      organisationUnitGroup: 4,
      trackedEntityInstance: 8447188,
      programInstance: 11605179,
      indicatorType: 2,
      eventVisualization: 5,
      map: 25,
      userGroup: 19,
      dataElementGroup: 15,
      indicatorGroup: 10,
      user: 21974,
      dataSet: 5,
      dashboard: 12
    }
  },
  {
    name: "eRHMIS",
    description:
      "Sri Lanka Electronic Reproductive Health Information Management System",
    objectCounts: {
      indicator: 1400,
      period: 591,
      visualization: 8975,
      programStageInstance: 20074,
      organisationUnit: 38909,
      validationRule: 191,
      dataValue: 226932240,
      dataElement: 2549,
      program: 5,
      organisationUnitGroup: 19,
      trackedEntityInstance: 14263,
      programInstance: 13761,
      indicatorType: 4,
      eventVisualization: 7,
      indicatorGroup: 57,
      userGroup: 110,
      dataSet: 43,
      user: 3254,
      map: 242,
      dataElementGroup: 155,
      dashboard: 1173
    }
  },
  {
    name: "eRHMIS2",
    description:
      "Sri Lanka Electronic Reproductive Health Information Management System (2)",
    objectCounts: {
      indicator: 181,
      visualization: 241,
      period: 88,
      programStageInstance: 349724,
      organisationUnit: 38772,
      validationRule: 0,
      dataValue: 4801,
      dataElement: 304,
      program: 7,
      organisationUnitGroup: 24,
      trackedEntityInstance: 175482,
      programInstance: 173069,
      indicatorType: 4,
      dataSet: 4,
      userGroup: 17,
      dataElementGroup: 4,
      map: 5,
      user: 9936,
      indicatorGroup: 8,
      dashboard: 221
    }
  }
  //... add more databases ...
];

const attributesToDisplay = [
  { key: "METADATA", displayName: "METADATA", color: "#000" },
  { key: "organisationUnit", displayName: "organisationUnit", color: "#333" },
  {
    key: "organisationUnitGroup",
    displayName: "organisationUnitGroup",
    color: "#333"
  },
  { key: "user", displayName: "user", color: "#333" },
  { key: "userGroup", displayName: "userGroup", color: "#333" },
  { key: "dataSet", displayName: "dataSet", color: "green" },
  { key: "dataElementGroup", displayName: "dataElementGroup", color: "green" },
  { key: "dataElement", displayName: "dataElement", color: "green" },
  { key: "indicatorType", displayName: "indicatorType", color: "green" },
  { key: "indicatorGroup", displayName: "indicatorGroup", color: "green" },
  { key: "indicator", displayName: "indicator", color: "green" },
  { key: "validationRule", displayName: "validationRule", color: "green" },
  { key: "visualization", displayName: "visualization", color: "red" },
  { key: "map", displayName: "map", color: "red" },
  { key: "dashboard", displayName: "dashboard", color: "red" },
  { key: "program", displayName: "program", color: "blue" },
  {
    key: "eventVisualization",
    displayName: "eventVisualization",
    color: "blue"
  },
  { key: "DATA", displayName: "DATA", color: "#000" },
  { key: "period", displayName: "period", color: "green" },
  { key: "dataValue", displayName: "dataValue", color: "green" },
  { key: "programInstance", displayName: "enrollment", color: "blue" },
  { key: "programStageInstance", displayName: "event", color: "blue" },
  {
    key: "trackedEntityInstance",
    displayName: "trackedEntityInstance",
    color: "blue"
  }
];

// Find the highest value for each attribute across all databases.
const maxValues = {};
databases.forEach(database => {
  for (let key in database.objectCounts) {
    if (!maxValues[key] || maxValues[key] < database.objectCounts[key]) {
      maxValues[key] = database.objectCounts[key];
    }
  }
});

const container = document.querySelector(".card-container");

databases.forEach(database => {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h2");
  title.textContent = database.name;
  card.appendChild(title);

  const description = document.createElement("p");
  description.textContent = database.description;
  description.className = "description";
  card.appendChild(description);

  const table = document.createElement("table");
  table.className = "table";

  var setClass = "";
  attributesToDisplay.forEach(attribute => {
    if (database.objectCounts[attribute.key] !== undefined) {
      // Ensure that the attribute exists in the database
      const row = table.insertRow();

      const cell1 = row.insertCell(0);
      cell1.textContent = attribute.displayName || attribute.key;
      if (attribute.color) {
        cell1.style.color = attribute.color;
      }

      const cell2 = row.insertCell(1);
      cell2.textContent = database.objectCounts[attribute.key].toLocaleString();

      const cell3 = row.insertCell(2);
      const progressBarContainer = document.createElement("div");
      progressBarContainer.className = "progress-bar-container";

      const progressBar = document.createElement("div");
      let pgClass =
        database.objectCounts[attribute.key] / maxValues[attribute.key] === 1
          ? "progress-bar gold"
          : "progress-bar";
      progressBar.className = pgClass;
      progressBar.style.width = `${(database.objectCounts[attribute.key] /
        maxValues[attribute.key]) *
        100}%`;

      progressBarContainer.appendChild(progressBar);
      cell3.appendChild(progressBarContainer);
    } else {
      const row = table.insertRow();
      let setClass = attribute.key; // You can modify this based on how you want to use it.

      const cell1 = row.insertCell(0);
      cell1.className = setClass;
      cell1.colSpan = 3;
      cell1.textContent = attribute.displayName || attribute.key;
    }
  });

  card.appendChild(table);
  container.appendChild(card);
});
