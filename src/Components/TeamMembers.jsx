import clsx from "clsx";
import styles from "./TeamMembers.module.css";
import memberImage1 from "../assets/images/member-1.jpg";
import memberImage2 from "../assets/images/member-2.jpg";
import memberImage3 from "../assets/images/member-3.jpg";
import memberImage4 from "../assets/images/member-4.jpg";

const members = [
  {
    name: "Mrs. Ampah Rebecca",
    image: memberImage1,
    position: "Project Manager",
    stake: "Co-founder",
  },
  {
    name: "Mr. Boakye Samuel",
    image: memberImage2,
    position: "Finance manager",
    stake: "Co-Founder",
  },
  {
    name: "Mr. Peter Boakye",
    image: memberImage3,
    position: "Regional Operations Manager",
    stake: "Co-founder",
  },
  {
    name: "Mr. Nkoom Theophilus",
    image: memberImage4,
    position: "Regional Operations Manager",
    stake: "Co-founder",
  },
];

function TeamMembers() {
  return (
    <div className={clsx(styles.teamMembers)}>
      <div className={clsx(styles.teamHeader)}>
        <p>TEAM MEMBERS</p>
        <h3>QUALIFIED FARM CARE PROFESSIONALS</h3>
      </div>
      <div className={clsx(styles.teamContainer)}>
        {members.map((member) => (
          <MemberCard
            memberImage={member.image}
            memberName={member.name}
            memberPosition={member.position}
            memberStake={member.stake}
          />
        ))}
      </div>
    </div>
  );
}

function MemberCard({ memberImage, memberName, memberPosition, memberStake }) {
  return (
    <div className={clsx(styles.memberCard)}>
      <div className={clsx(styles.memberImage)}>
        <img src={memberImage} alt="member-image" />
      </div>
      <div className={clsx(styles.memberDescription)}>
        <h3 className={clsx(styles.memberTitle)}>{memberName}</h3>
        <p className={clsx(styles.memberPosition)}>{memberPosition}</p>
        <p className={clsx(styles.memberStake)}>{memberStake}</p>
      </div>
    </div>
  );
}

export default TeamMembers;
