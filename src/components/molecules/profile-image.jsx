import { motion } from "motion/react";
import Image from "next/image";
import profileImg from "@/assets/profile-image.jpg";

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0, duration: 0.6 }}
      className="bg-blue-500 h-[300px] rounded-4xl relative overflow-hidden"
    >
      <Image
        src={profileImg}
        loading="eager"
        alt="Profile"
        fill
        className="object-cover"
      />
    </motion.div>
  );
};
export default ProfileImage;
