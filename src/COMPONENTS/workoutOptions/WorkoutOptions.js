import React, { useEffect, useState } from "react";
import "./WorkoutOptions.css";
import TitleComponent from "../title_Component/TitleComponent";
import axios from "axios";
import SpinnerComponent from "../Spinner_Component/SpinnerComponent";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const workoutData = [
  {
    type: "back",
    OfficalName: "Back Workouts",
    imageUrl:
      "https://media.istockphoto.com/id/610648202/photo/athlete-muscular-fitness-male-model-pulling-up-on-horizontal-bar.jpg?s=1024x1024&w=is&k=20&c=5LlIPzEFpDmltUV4MLXf9BFfGTTT0GitXNBLJQsRS7M=",
  },
  {
    type: "cardio",
    OfficalName: "Cardio",
    imageUrl:
      "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    type: "chest",
    OfficalName: "Chest Workouts",
    imageUrl:
      "https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    type: "lower arms",
    OfficalName: "Lower arm workouts",
    imageUrl:
      "https://images.pexels.com/photos/2261482/pexels-photo-2261482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    type: "upper arms",
    OfficalName: "Upper arm Workouts",
    imageUrl:
      "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    type: "lower legs",
    OfficalName: "Lower Leg Workouts",
    imageUrl:
      "https://media.istockphoto.com/id/1202786878/photo/trained-legs-with-muscular-calves-in-sneakers-in-training-gym-during-hard-fitness-and-gym.jpg?s=612x612&w=0&k=20&c=cA1KyWUO-e3-fyk_N1z3ZapoDr2qMPaIK1PlCOK8wbI=",
  },
  {
    type: "upper legs",
    OfficalName: "Upper Leg Workouts",
    imageUrl:
      "https://media.istockphoto.com/id/597631958/photo/man-focused-on-training-legs-on-the-machine.jpg?s=612x612&w=0&k=20&c=_Xb9Jj_7qRt2iFeEEkKEoZgEa_xgN9gtAtsdl8GiToM=",
  },
  {
    type: "neck",
    OfficalName: "Neck Workouts",
    imageUrl:
      "https://media.istockphoto.com/id/1346855285/photo/beautiful-attractive-young-woman-doing-yoga-exercising-at-home-health-concept-fitness-concept.jpg?s=612x612&w=0&k=20&c=qVIN2ZLvIyV6vfJyZFiURgrV120GoAMj1-PnXrN6Ugw=",
  },
  {
    type: "shoulders",
    OfficalName: "Shoulder Workouts",
    imageUrl:
      "https://media.istockphoto.com/id/2158385599/photo/man-performing-shoulder-press-with-dumbbells-against-background-during-workout.jpg?s=612x612&w=0&k=20&c=9Fo5WoCA7271yqRfJixOzxsfhQ-iQp8fK1OEXoVJCyI=",
  },
  {
    type: "waist",
    OfficalName: "Waist Workouts",
    imageUrl:
      "https://media.istockphoto.com/id/827403850/photo/muscular-man-abs-in-gym-shaped-abdominal-strong-male-naked-torso-working-out.jpg?s=612x612&w=0&k=20&c=vAIdgkPOH5yU91UEtjPYS9zhWDUfIR1syxtMpjsgd50=",
  },
  {
    type: "biceps",
    OfficalName: "Biceps Workouts",
    imageUrl:
      "https://media.istockphoto.com/id/611628492/photo/body-building-in-progress.jpg?s=612x612&w=0&k=20&c=3EMaLCLwhnErPin_LxZkaN5JxA1MHuJfIbBNBdjkqvo=",
  },
];
function WorkoutOptions(props) {
  // const [workoutData, setData] = useState([]);
  const navigate = useNavigate();
  const { style } = props;
  // useEffect(() => {
  //   WorkoutApiCalling();
  // }, []);
  // const WorkoutApiCalling = async () => {
  //   const response = await axios.get(
  //     "https://exercisedb-1.onrender.com/bodyPartsList"
  //   );
  //   try {
  //     if (response.status === 200) {
  //       setData(response.data);
  //     }
  //   } catch (err) {
  //     alert("something went wrong please refresh");
  //   }
  // };

  const workoutChooseHandler = (type) => {
    navigate(`/exercises-types/${type}`);
  };
  return (
    <div id="workout-Plans-background" style={style}>
      <TitleComponent
        content="WORKOUT CATEGORIES"
        style={{ margin: "0px 0px -20px 0px" }}
      />
      <p id="workout-categories-subTitles">
        Choose a category that best suits the workouts you're searching for your
        goals.
      </p>
      <div id="list-of-workoutOptions-div">
        {workoutData.length > 0 ? (
          workoutData.map((each, index) => {
            return (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 70 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className="types-of-workoutOptions-div"
                key={each.type}
                onClick={() => workoutChooseHandler(each.type)}
              >
                <img src={each.imageUrl} alt={each.type} />
                <p>{each.OfficalName}</p>
              </motion.div>
            );
          })
        ) : (
          <SpinnerComponent style={{ height: "60%" }} />
        )}
      </div>
    </div>
  );
}

export default WorkoutOptions;
