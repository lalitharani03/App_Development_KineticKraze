import { AiFillStar } from "react-icons/ai";
import Equipment from "../Sidebar/Equipment/Equipment";
import BodyFocus from "../Sidebar/BodyFocus/BodyFocus";

const data = [
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_1080,q_90/https://downloads.ctfassets.net/6ilvqec50fal/JSWi5keUr3w5myEInfYdN/c1dadb9e2721365e62ce0f8c549a5924/overhead-press.jpg",
    title: 'Overhead Press',
    equipment: 'Dumbbells',
    bodyfoucs: 'Upper Body',
    rightway:'The Right Way to do overhead Dumbbell Press',
    step1:'Stand with your feet shoulder-width apart and hold a dumbbell in each hand at shoulder level with your palms facing forward. Your elbows should be bent and pointing out to the sides.',
    step2:'Brace your core and press the dumbbells up overhead until your arms are fully extended. Make sure to keep your wrists straight and your elbows locked at the top of the movement.',
    step3:'Lower the dumbbells back down to shoulder level with control.',
    step4:'Repeat for the desired number of repetitions.',
    result:'It’s important to maintain proper form throughout the exercise to avoid injury and maximize the benefits. Start with a weight that you can lift comfortably and gradually increase the weight as you build strength.',
    video:"M2rwvNhTOu0"
  },
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_1080,q_90/https://images.ctfassets.net/6ilvqec50fal/esihNJBFaitUg1qfiBdFz/ca1608116dc5590a0c609b66a1a57058/skull-crusher.png",
    title: 'Skull Crusher',
    equipment: 'Dumbbell',
    bodyfoucs: 'Upper Body',
    step1:'Flex your elbows and lower the weight toward the top of your head. Your upper arms should remain relatively perpendicular to your body. This keeps the tension on the triceps versus shifting it to the shoulders.',
    step2:'Continue lowering the weight behind the head. The bottom of the dumbbell head should be about in line with the benchs top, or even a little higher if this feels unwieldy.',
    step3:'Reverse the movement until the weight is above the chest in the original starting position. Keep from locking the elbow to maintain tension in your triceps muscle.',
    step4:'Repeat.',
    result:'Start with just a few reps of this exercise. As you begin to build strength, work your way up to 3 to 5 sets of lying triceps extensions, each with between 6 and 12 repetitions. If using a barbell, have a spotter available in case you run into difficulty.',
    video:'1BDGIcMTSXc'
  },
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_1080,q_90/https://downloads.ctfassets.net/6ilvqec50fal/sllKIFp8Dq0dfwThN07z1/7623f830ad26bcd44a8c90609d6680ac/biceps-curl.jpg",
    title: 'Biceps Curl',
    equipment: 'Dumbbell',
    bodyfoucs: 'Upper Body',
    step1:'Begin standing tall with your feet about hip-width apart. Keep your abdominal muscles engaged. Hold one dumbbell in each hand. Let your arms relax down at the sides of your body with palms facing forward.',
    step2:'Keep your upper arms stable and shoulders relaxed, bend at the elbow and lift the weights so that the dumbbells approach your shoulders. Or for a full range of motion, raise the dumbbells to your eyes or forehead level. Your elbows should stay tucked in close to your body.',
    step3:'Exhale while lifting. Lower the weights to the starting position.',
    step4:'Perform the desired reps, staying within 3 to 5 reps of total failure.',
    result:'A barbell, cable machine, or resistance bands can also be used similarly for curl exercises. You can use these variations to challenge your biceps in different ways.',
    video:'ykJmrZ5v0Oo'
  },
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_1080,q_90/https://images.ctfassets.net/6ilvqec50fal/2LR7uULUy2X2g4s8o66mde/35a1279c92e9f8b515e3ba9b7d162b16/front_raise.png",
    title: 'Front Raise',
    equipment: 'Dumbbells',
    bodyfoucs: 'Upper Body',
    step1:'Stand with your feet about shoulder-width apart. Let your arms hang in front of you with the dumbbells in front of the thighs.',
    step2:'Lift the weights upward while inhaling. Your arms are extended, palms facing down, with a slight bend in the elbows to reduce stress on the joints.',
    step3:'Pause briefly when your arms are horizontal to the floor at shoulder height.',
    step4:'Lower the dumbbells to the starting position (at the thighs) with a slow and controlled motion while exhaling.',
    result:"A suggested starting weight for this exercise is 5-pound dumbbells for women and 10-pound dumbbells for men. If you can''t lift this much while maintaining proper form, start with a lighter weight. Lifting weights that are too heavy could cause you to sacrifice form.",
    video:'-t7fuZ0KhDA'
  },
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch//https://images.ctfassets.net/6ilvqec50fal/6sIMVLBsRhAIeW3deMDn8x/7490d108dff238c03bbd9939333e5f24/Rad_squats.gif",
    title: 'Squats',
    equipment: 'No Equipment',
    bodyfoucs: 'Lower Body',
    step1:"Stand with feet about hip or shoulder-width apart. If using a chair, place it behind you and stand in front of it. Tighten your abs.",
    step2:"Bend the knees and slowly squat towards the chair. Send the hips back, while keeping the head up and the torso straight. You can extend the arms if that helps with balance.",
    step3:"Pause here, or sit briefly on the chair, and then contract the glutes to lift up out of the chair and begin extending the legs.",
    step4:"Extend the legs fully until you're back to standing position, but don't lock the knees. Repeat this for 1-3 sets of 10-16 repetitions.",
    result:"If using a chair, progress to a more challenging variation by squatting until you're just hovering over the chair. You can also hold weights for added intensity.",
    video:"xqvCmoLULNY"
  },
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch//https://images.ctfassets.net/6ilvqec50fal/ast-ifpimg-2-are-you-doing-these-3-common-lower-body-strength-mo/29154d4de0e30ed9a4fb00bac43b19b0/Robin-weighteddeadlifts_960_540.gif",
    title: 'Deadlifts',
    equipment: 'Barbell',
    bodyfoucs: 'Lower Body',
    step1:"Grasp the bar just outside the line of your knees with an overhand or mixed grip.",
    step2:"Position your feet shoulder-width apart (or not much more) with toes under the bar. Your feet point straight ahead, or they can angle out slightly. Heels should stay flat on the surface. As you lift and lower the bar, it will travel close to the shins and may even graze them. Maintain a neutral spine position.",
    step3:"Engage your abdominal muscles. Slowly bring the weight down as far as you can while maintaining proper form, softening your knees, and keeping your back flat. Lift the bar by pushing upward with the legs from the knees. Breathe out on exertion. Be careful not to raise the hips first so the trunk moves forward and the back becomes rounded. Don’t try to haul the bar up with your arms. The arms stay extended under tension while gripping the bar as the legs push up. Think of the legs and shoulders moving upward in unison with the hips, the balancing point.",
    step4:"The bar should almost graze the shins and rest around the thighs as you reach full height. Pull the shoulders back as much as possible without bending backward. Lower the bar toward the floor with a reverse motion ensuring a straight back. Repeat for your desired number of repetitions.",
    result:"When starting, practice with light weight until ​your form is satisfactory. A personal trainer or gym attendee can check you for the correct form. Practice in a mirror if necessary. You can add weight as your fitness increases, but it's better to do so modestly so you don't strain your muscles. As with all weightlifting exercises, proper footwear, like these best CrossFit shoes, is essential.",
    video:"7j-2w4-P14I"
  },
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch//https://images.ctfassets.net/6ilvqec50fal/6gubFhg1GtNpj2Z70UPBmf/38eca6409f4b5e563120982ecc699d4b/Untitled_design__1_.gif",
    title: 'Glute Bridges',
    equipment: 'No Equipment',
    bodyfoucs: 'Lower Body',
    step1:"Tighten your abdominal and buttock muscles by pushing your low back into the ground.",
    step2:"Raise your hips to create a straight line from your knees to your shoulders.",
    step3:"Squeeze your core and pull your belly button back toward your spine. Hold for 20 to 30 seconds.",
    step4:"Lower your hips to return to the starting position.",
    result:"Remember to keep your abdomen engaged and your arms at your sides to support your weight and prevent back strain.",
    video:"XLXGydU5DdU"
  },
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch//https://images.ctfassets.net/6ilvqec50fal/ast-ifpimg-3-are-you-doing-these-3-common-lower-body-strength-mo/98f74c547d961868d35fcdb9d4e096ef/Robin-reverselunges_960_540.gif",
    title: 'Lunges',
    equipment: 'No Equipment',
    bodyfoucs: 'Lower Body',
    step1:"Bend the knees and lower your body until the back knee is a few inches from the floor.",
    step2:"At the bottom of the movement, the front thigh is parallel to the ground, the back knee points toward the floor, and your weight is evenly distributed between both legs.",
    step3:"Push back up to the starting position",
    step4:"Keeping your weight on the heel of the front foot.",
    result:"Your hip flexors are stretched during the lunge. This improves their flexibility and counteracts the shortening and tightening that can happen when you sit for long periods. You also engage your core muscles for stability, which can help you maintain balance and prevent injuries.",
    video:"ASdqJoDPMHA"
  },
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_1080,q_90/https://images.ctfassets.net/6ilvqec50fal/62jWxBsvxFT4BTMewvtzh/c72f2907f2d0307bf5340565967ee1ea/deadbug_jesssims.png",
    title: 'Dead Bug',
    equipment: 'No Equipment',
    bodyfoucs: 'Core'
  },
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_1080,q_90/https://images.ctfassets.net/6ilvqec50fal/1gRhpzIhNzr8hFuSF0vPBR/dd8ad0f0a0a9bdc26680e5b7c934efe6/birddog_jesssims.png",
    title: 'Bird Dog',
    equipment: 'No Equipment',
    bodyfoucs: 'Core'
  },
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_1080,q_90/https://images.ctfassets.net/6ilvqec50fal/2UwZp8tGL5VUzyAJwWgNVJ/5ed6b3c8a3b6e2feb22db455edc8ea41/hollowbody_andyspeer.png",
    title: 'Hollow Body Hold',
    equipment: 'No Equipment',
    bodyfoucs: 'Core'
  },
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_1080,q_90/https://images.ctfassets.net/6ilvqec50fal/6Z65lWstwgpYxBi2nZd42P/f54fe44410cd7d5e4522bd05a58c700c/plank_rebeccakennedy.png",
    title: 'Plank Variations',
    equipment: 'No Equipment',
    bodyfoucs: 'Core'
  },
  {
    img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/03/400x400_The_Benefits_of_Dynamic_Stretching_and_How_to_Get_Started_Arm_Circles.gif?w=315&h=840",
    title: 'Arm circles',
    equipment: 'No Equipment',
    bodyfoucs: 'Cardio'
  },
  {
    img: "https://cdn.jefit.com/assets/img/exercises/gifs/822.gif",
    title: 'Trunk rotation',
    equipment: 'No Equipment',
    bodyfoucs: 'Cardio'
  },
  {
    img: "https://runnerclick.com/wp-content/webpc-passthru.php?src=https://media.runnerclick.com/wp-content/uploads/2020/04/running-in-place.jpg&nocache=1",
    title: 'Jogging in place',
    equipment: 'No Equipment',
    bodyfoucs: 'Cardio'
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxzsErDtJu0zaOlsj1DzSnwoNeyA-oURRJ2w&s",
    title: 'Run on the treadmill',
    equipment: 'Treadmill',
    bodyfoucs: 'Cardio'
  },
  {
    img: "https://www.dmoose.com/cdn/shop/articles/feature-image_13797c43-6167-47c5-96e7-649c1bebe701.jpg?v=1678380726",
    title: 'Pedal away on an elliptical',
    equipment: 'Elliptical',
    bodyfoucs: 'Cardio'
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2kHuMT1p5JYKfDHa0guCVC7iV7vBbl1rIvw&s",
    title: 'Cycle on a stationary bike',
    equipment: 'Stationary Bike',
    bodyfoucs: 'Cardio'
  },
  {
    img:"https://www.pristyncare.com/blog/wp-content/uploads/2020/06/Dhanurasana-e1591385216115.jpg",
    title: 'Dhanurasana',
    equipment: 'Mat',
    bodyfoucs: 'Yoga'
  },
  {
    img:"https://www.pristyncare.com/blog/wp-content/uploads/2020/06/Bridge-Pose.jpg",
    title: 'Setu Bandha Sarvangasana',
    equipment: 'Mat',
    bodyfoucs: 'Yoga'
  },
  {
    img:"https://www.pristyncare.com/blog/wp-content/uploads/2019/09/navasana.jpg",
    title: 'Naukasana',
    equipment: 'Mat',
    bodyfoucs: 'Yoga'
  },
  {
    img:"https://www.pristyncare.com/blog/wp-content/uploads/2020/06/Triangle-Pose-e1591386168865.jpg",
    title: 'Trikonasana',
    equipment: 'Mat',
    bodyfoucs: 'Yoga'
  },
  {
    img:"https://www.pristyncare.com/blog/wp-content/uploads/2020/06/Veera-Bhadra-Asana-e1591386373995.jpg",
    title: 'Veera bhadrasana',
    equipment: 'Mat',
    bodyfoucs: 'Yoga'
  },
  {
    img:"https://www.pristyncare.com/blog/wp-content/uploads/2020/06/Plank-Pose.jpg",
    title: 'Chaturangadandasana',
    equipment: 'Mat',
    bodyfoucs: 'Yoga'
  },
  {
    img:"https://www.pristyncare.com/blog/wp-content/uploads/2019/09/sarvangasana.jpg",
    title: 'Sarvangasana',
    equipment: 'Mat',
    bodyfoucs: 'Yoga'
  },
  {
    img:"https://www.pristyncare.com/blog/wp-content/uploads/2020/06/bhujangasana-or-cobra-pose-e1591386678565.jpg",
    title: 'Bhujangasana',
    equipment: 'Mat',
    bodyfoucs: 'Yoga'
  },
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch//https://images.ctfassets.net/6ilvqec50fal/7s1Hi1SXGakZmOdTbw3xGZ/0d3457c79f88a6a05992e532bb247bf1/dumbbell-thrusters.gif",
    title: 'Dumbbell Thrusters',
    equipment: 'Dumbbell',
    bodyfoucs: 'Full Body'
  },
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch//https://images.ctfassets.net/6ilvqec50fal/BIgBnkyjlhdjErnWdw8IT/a52ba596df3140bfb5bcf9e766a51855/Mountain_Climbers.gif",
    title: 'Mountain Climbers ',
    equipment: 'No Equipment',
    bodyfoucs: 'Full Body'
  },
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch//https://images.ctfassets.net/6ilvqec50fal/75T63ldylWXS4nR9Vih4iV/53b8bf9bb1afd77cc44304a4c4e202e7/renegade-row.gif",
    title: 'Renegade Rows',
    equipment: 'Dumbbell',
    bodyfoucs: 'Full Body'
  },
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch//https://images.ctfassets.net/6ilvqec50fal/2ccUZs8a2lJB1i3XARpZU0/44cf93754e2a71cfcee62181823087a4/push-press.gif",
    title: 'Push Press',
    equipment: 'Dumbbell',
    bodyfoucs: 'Full Body'
  }
]
export default data;