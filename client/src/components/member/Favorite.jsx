import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Favorite() {
  const [users, favorite] = useState([]);

  useEffect(() => {
    // 在組件載入時，從後端獲取會員清單資料
    fetchFavoriteList();
  }, []);

  const fetchFavoriteList = async () => {
    try {
        var jwtToken = document.cookie.split('=')[1].trim();
        console.log(jwtToken)
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/favorite`, {
        headers: {
          Authorization: jwtToken
        }
      });
      favorite(response.data);
      console.log(response.data)
    } catch (error) {
      // 處理錯誤情況
    }
  };

  return (
    <div>
      <h2>會員追蹤清單</h2>
    </div>
  );
}

export default Favorite;
