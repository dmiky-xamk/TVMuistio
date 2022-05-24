import { useCallback, useState } from "react";

// Hook palauttaa haetaanko tietoja vielä palvelimelta,
// ja funktion (fetchData), jota käytetään itse datan hakemiseen.
export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);

  // Käytetään useCallback, jotta toimisi myös useEffectin kanssa
  const fetchData = useCallback(async (url, setError, applyData) => {
    // Aloitetaan datan hakeminen -> Spinneri pyörii
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      const data = await res.json();

      // Lähetetään data sen hoitavalle funktiolle.
      applyData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      // Kaiken päätteeksi lopetetaan lataus
      setIsLoading(false);
    }
  }, []);

  return { isLoading, fetchData };
}
