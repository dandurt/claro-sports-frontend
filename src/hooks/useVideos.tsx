import React from "react";
import { fetchVideos } from "services/videos";

const useVideos = () => {
  const [data, setData] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const getVideos = async () => {
      try {
        const { data } = await fetchVideos();
        const dataWithActiveProp = data.map((d, i) => {
          if (i === 0) {
            return {
              ...d,
              isActive: true,
            };
          }
          return {
            ...d,
            isActive: false,
          };
        });
        setData(dataWithActiveProp);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getVideos();
  }, []);

  const handleClickVideo = (id: string) => {
    const videos = data.map((d) => {
      if (d.id === id) {
        return {
          ...d,
          isActive: true,
        };
      }
      return {
        ...d,
        isActive: false,
      };
    });

    setData(videos);
  };

  return { data, isLoading, handleClickVideo };
};

export default useVideos;
