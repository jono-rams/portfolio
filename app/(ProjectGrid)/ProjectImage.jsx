// components/ProjectImage.js
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { firebaseStorage } from "../../utils/firebase/firebase";
import { getDownloadURL, ref } from "firebase/storage";

const ProjectImage = ({ project }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const iRef = ref(firebaseStorage, project.image);
        const imageUrl = await getDownloadURL(iRef);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error("Error fetching project image:", error);
      }
    };

    fetchImage();
  }, [project.image]);

  return (
    <div>
      <Image
        src={imageSrc || "/images/placeholder.png"}
        alt={project.title}
        sizes="100vw"
        className="card-img-top"
        width={0}
        height={0}
        priority={true}
      />
    </div>
  );
};

export default ProjectImage;
