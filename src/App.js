import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./home-page.js/LandingPage";
import Homepage from "./home-page.js/HomePage";
import WorkoutOptions from "./COMPONENTS/workoutOptions/WorkoutOptions";
import WorkoutDetails from "./COMPONENTS/workoutDetails/workoutDetails";
import ExerciseDataFetching from "./COMPONENTS/ExerciseDataFetching/ExerciseDataFetching";
import WorkoutEquipment from "./COMPONENTS/workoutEquipment/WorkoutEquipment";
import SelectedWorkoutsList from "./COMPONENTS/selectedWorkoutList/SelectedWorkoutsList";
import SelectedDataShower from "./COMPONENTS/selectedWorkoutList/SelectedDataShower";
import ChoosingLevel from "./COMPONENTS/levelChooserFile/ChoosingLevel";
import FilterationByLevel from "./COMPONENTS/levelChooserFile/filterationByLevel/FilterationByLevel";
import WorkoutTimerStart from "./COMPONENTS/StartOfWorkouts/WorkoutTimerStart";
import "react-toastify/dist/ReactToastify.css";
import CelebrationsofCompletion from "./COMPONENTS/celebrations/celebrations-of-Completion";
import BMICalculator from "./COMPONENTS/bmi_calculator/BmiCalculator";
import PageNotFound from "./PageNotFound";
function App() {
  return (
    <div className="AppBody">
      <ExerciseDataFetching />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/exercises-types" element={<WorkoutOptions />} />
        <Route
          path="/exercises-types/:workoutName"
          element={<WorkoutDetails />}
        />
        <Route
          path="/exercises-types/equipment"
          element={<WorkoutEquipment />}
        />
        <Route path="/selected-exercises" element={<SelectedWorkoutsList />} />
        <Route
          path="/selected-exercises/:id"
          element={<SelectedDataShower />}
        />
        <Route path="/select-level" element={<ChoosingLevel />} />
        <Route path="/select-level/:level" element={<FilterationByLevel />} />
        <Route
          path="/start-working-out/level/:level"
          element={<WorkoutTimerStart />}
        />
        <Route
          path="/celebrations-of-Completion"
          element={<CelebrationsofCompletion />}
        />
        <Route path="/BMIcalculator" element={<BMICalculator />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
