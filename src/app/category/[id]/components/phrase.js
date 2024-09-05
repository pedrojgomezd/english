"use client";

import { Button, Card } from "flowbite-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { CgArrowsExchange } from "react-icons/cg";

export const PhrasesComponent = ({ phrases }) => {
  const [currentPhrase, setCurrenPhrase] = useState();
  const [showMe, setShowMe] = useState();
  const [lang, setlag] = useState(["en", "es"]);

  const changeLang = () => {
    setlag((prev) => [...prev].reverse());
  };

  const nextPhraseRandom = useCallback(() => {
    setShowMe(false);
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setCurrenPhrase(phrases[randomIndex]);
  }, []);

  useEffect(() => {
    nextPhraseRandom();
  }, []);

  return currentPhrase ? (
    <main className="p-4 flex flex-col space-y-4">
      <div className="flex justify-between">
        <Link href={"/"}>
          <Button color={"light"}>
            <MdOutlineArrowBackIos className="mr-2 h-5 w-5" /> Categories
          </Button>
        </Link>
        <Button onClick={changeLang}>
          Es <CgArrowsExchange className="mr-2 h-5 w-5" /> En
        </Button>
      </div>

      <Card>
        <div>
          <div id="cita">{currentPhrase[lang[0]]}</div>
        </div>
      </Card>

      <div className="flex items-center justify-center">
        <Button
          size={"lg"}
          outline
          color={"dark"}
          onClick={() => setShowMe(true)}
        >
          Show me!
        </Button>
      </div>

      {showMe ? (
        <Card>
          <div>
            <div id="cita">{currentPhrase[lang[1]]}</div>
          </div>
        </Card>
      ) : null}

      <div className="flex items-center justify-center">
        <Button size={"lg"} onClick={() => nextPhraseRandom()}>
          Next!
        </Button>
      </div>
    </main>
  ) : (
    <div>SIN Phrase</div>
  );
};
