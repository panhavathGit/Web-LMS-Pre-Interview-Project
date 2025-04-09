import { Card } from "../components/Dashboard/Card";
const Courses = () => {
  return (
    <>
      <div>
        <h1 className="ml-3 text-2xl mt-0 mb-2 text-teal-600">Your Courses</h1>
      </div>
      <div className="grid grid-cols-3 justify-items-center">
        <Card image={`https://thecodegalaxy.com/blog/wp-content/uploads/2023/08/Scratch-Project-Ideas-for-Beginners-.jpg`}></Card>
        <Card image={`https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2024/08/Screen-Shot-2024-08-20-at-11.01.54-AM.png`}></Card>
        <Card image={`https://lit2bit.com/wp-content/uploads/elementor/thumbs/what-is-microbit-pvdc6k22c364mctll3phzgb2ztpv3vo5l1cm1h7kpg.png`}></Card>
        <Card image={`https://www.commonsense.org/sites/default/files/png/2018-08/website-review-codeorg.png`}></Card> 
        <Card image={`https://mylearnlab.com/wp-content/uploads/2022/03/Study-Skills-Photo.jpeg`}></Card> 
      </div>
    </>
  );
};

export default Courses;
