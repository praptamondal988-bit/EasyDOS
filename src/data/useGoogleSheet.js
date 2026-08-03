import { useEffect, useState } from "react";

import {
  getGoogleSheetData
} from "./googleSheet";


// ======================================================
// Google Sheet React Hook
// ======================================================

export function useGoogleSheet() {

  const [data, setData] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);


  useEffect(() => {

    let mounted = true;


    async function loadData() {

      try {

        setLoading(true);

        setError(null);


        const sheetData =
          await getGoogleSheetData();


        if (mounted) {

          setData(sheetData);

        }

      }

      catch (err) {

        console.error(err);


        if (mounted) {

          setError(
            "Google Sheet data load করা যায়নি."
          );

        }

      }

      finally {

        if (mounted) {

          setLoading(false);

        }

      }

    }


    loadData();


    return () => {

      mounted = false;

    };

  }, []);


  return {
    data,
    loading,
    error
  };

}