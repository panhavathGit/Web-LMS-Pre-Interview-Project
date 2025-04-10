import { Card } from "../components/Dashboard/Card";
const Courses = () => {
  return (
    <>
      <div>
        <h1 className="ml-3 text-2xl mt-0 mb-2 text-teal-600">Your Courses</h1>
      </div>
      <div className="grid grid-cols-3 justify-items-center">
        <Card image={`https://thecodegalaxy.com/blog/wp-content/uploads/2023/08/Scratch-Project-Ideas-for-Beginners-.jpg` } cardTitle={"Scratch"} content={"Scratch is a high-level, block-based visual programming language and website aimed primarily at children as an educational tool, with a target audience of ages 8 to 16."}></Card>
        <Card image={`https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2024/08/Screen-Shot-2024-08-20-at-11.01.54-AM.png`} cardTitle={"Code.org"} content={"Code.org is a non-profit organization and educational website founded by Hadi and Ali Partovi aimed at K-12 students that specializes in computer science."}></Card>
        <Card image={`https://lit2bit.com/wp-content/uploads/elementor/thumbs/what-is-microbit-pvdc6k22c364mctll3phzgb2ztpv3vo5l1cm1h7kpg.png`} content={"The BBC micro:bit is an award-winning programmable device that allows students to get hands-on with coding and digital making."} cardTitle={"Micro:bit"}></Card>
        <Card image={`https://www.commonsense.org/sites/default/files/png/2018-08/website-review-codeorg.png`} content={"A step to the next level."} cardTitle={"Code.org Advance"}></Card> 
        <Card image={`https://mylearnlab.com/wp-content/uploads/2022/03/Study-Skills-Photo.jpeg`} cardTitle={"Study Skill"} content={"Study skill is important for every students. It consist of soft skill and hard skill"}></Card> 
      </div>
    </>
  );
};

export default Courses;
