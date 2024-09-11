export function ApiDataReducer(inital = [], action) {
  switch (action.type) {
    case "apiDataSetting":
      return (inital = action.package);
    default:
      return inital;
  }
}

export function selectedMuscle(inital = [], action) {
  switch (action.type) {
    case "selectedMuscle":
      return (inital = action.package);
    default:
      return inital;
  }
}

export function selectedWorkoutMuscleList(inital = [], action) {
  switch (action.type) {
    case "selectedWorkoutMuscleList":
      return (inital = action.package);
    default:
      return inital;
  }
}

export function equipmentSelection(inital = [], action) {
  switch (action.type) {
    case "selectedEquipment":
      return (inital = action.package);
    default:
      return inital;
  }
}
