import React, { useState } from 'react'
import Padding from './Padding'

import Overlay from './Overlay'

const Bibliography = () => {


  const [infoCiteOverlay, setInfoCiteOverlay] = useState(false)
  const [imageCiteOverlay, setImageCiteOverlay] = useState(false)

  {/* InfoCite */}
  const openInfoCiteOverlay = () => {
    setInfoCiteOverlay(true);
  }

  const closeInfoCiteOverlay = () => {
    setInfoCiteOverlay(false);
  }

  {/* ImageCite */}
  const openImageCiteOverlay = () => {
    setImageCiteOverlay(true);
  }

  const closeImageCiteOverlay = () => {
    setImageCiteOverlay(false);
  }

  const informationCite = (
    <>
      <div>
        OverSimplified. “The Russian Revolution - OverSimplified (Part 1).” <i>YouTube</i>, 17 Aug. 2020, www.youtube.com/watch?v=Cqbleas1mmo.
        <Padding value="5px"/>
        OverSimplified. “The Russian Revolution - OverSimplified (Part 2).” <i>YouTube</i>, 18 Aug. 2020, www.youtube.com/watch?v=b1reY72ktEc.
        <Padding value="5px"/>
        The Editors of Encyclopaedia Britannica. “Eastern Front | WW1, Definition, Battles, and Casualties.” <i>Encyclopedia Britannica</i>, 11 Feb. 2021, www.britannica.com/event/Eastern-Front-World-War-I-history.
        <Padding value="5px"/>
        Wikipedia contributors. “July Days.” <i>Wikipedia</i>, 8 May 2024, en.wikipedia.org/wiki/July_Days.
        <Padding value="5px"/>
        Wikipedia contributors. “April Theses.” <i>Wikipedia</i>, 27 Apr. 2024, en.wikipedia.org/wiki/April_Theses.
        <Padding value="5px"/>
        Wikipedia contributors. “Red Terror.” <i>Wikipedia</i>, 11 May 2024, en.wikipedia.org/wiki/Red_Terror.
        <Padding value="5px"/>
        Onion, Amanda. “Soviet Union - Countries, Cold War and Collapse | HISTORY.” <i>HISTORY</i>, 20 Mar. 2023, www.history.com/topics/european-history/history-of-the-soviet-union.
      </div>
      
    </>
  )
  const imagesCite = (
    <>
      <div style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
        Ryzhkov, Vladimir. "Bloody Sunday." <i>The Moscow Times</i>, 13 Jan. 2015, static.themoscowtimes.com/image/article_1360/d0/6355e1e36505412291792eb6e7f68d09.jpg
        <Padding value="5px"/>
        Popper, Paul. "Tsar Nicholas II" <i>Getty Images</i>, encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSa7u-obzJKTAG3Li8UbC4Z3SK-tXshU4KGX8zqVtB1AC8WrGxBETl-z9-iDeP4kX0o0Fs39m-ZBKC4_Bk
        <Padding value="5px"/>
        Wikipedia contributors. Vladimir Lenin. 27 Apr. 2024, en.wikipedia.org/wiki/Vladimir_Lenin#/media/File:Lenin_in_1920_(cropped).jpg.
        <Padding value="5px"/>
        “Joseph Stalin (Premier of Soviet Union).” <i>Encyclopedia Britannica</i>, www.britannica.com/biography/Joseph-Stalin/images-videos.
        <Padding value="5px"/>
        Wikipedia contributors. Georgy Gapon. 4 May 2024, en.wikipedia.org/wiki/Georgy_Gapon#/media/File:%D0%91%D0%B0%D1%82%D1%8C%D0%BA%D0%B0_%D0%93%D0%B0%D0%BF%D0%BE%D0%BD.jpg.
        <Padding value="5px"/>
        Wikipedia contributors. Grigori Rasputin. 8 May 2024, en.wikipedia.org/wiki/Grigori_Rasputin#/media/File:Rasputin_PA.jpg.
        <Padding value="5px"/>
        Wikipedia contributors. Alexandra Feodorovna (Alix of Hesse). 18 Apr. 2024, en.wikipedia.org/wiki/Alexandra_Feodorovna_(Alix_of_Hesse)#/media/File:Alexandra_Fyodorovna_LOC_01137u.jpg.
        <Padding value="5px"/>
        The Editors of Encyclopaedia Britannica. “Eastern Front | WW1, Definition, Battles, and Casualties.” <i>Encyclopedia Britannica</i>, 11 Feb. 2021, www.britannica.com/event/Eastern-Front-World-War-I-history.
        <Padding value="5px"/>
        Wikipedia contributors. <i>The Storming of the Winter Palace</i>. 22 Feb. 2024, en.wikipedia.org/wiki/The_Storming_of_the_Winter_Palace#/media/File:Stormningen_av_vinterpalatset.jpg.
        <Padding value="5px"/>
        The Editors of Encyclopaedia Britannica. “Russian Civil War | Casualties, Causes, Combatants, and Outcome.” <i>Encyclopedia Britannica</i>, 10 May 2024, www.britannica.com/event/Russian-Civil-War.
        <Padding value="5px"/>
        Harris, Carolyn. “The Abdication of Nicholas II Left Russia Without a Czar for the First Time in 300 Years.” Smithsonian Magazine, 13 Mar. 2017, www.smithsonianmag.com/history/abdication-nicholas-ii-left-russia-without-tsar-first-time-300-years-180962503.
        <Padding value="5px"/>
        Wikipedia contributors.<i> Murder of the Romanov Family</i>. 11 May 2024, en.wikipedia.org/wiki/Murder_of_the_Romanov_family#/media/File:Ipatyev_house_basement.jpg.
        <Padding value="5px"/>
        Admin. “‘Bread, Peace and Land’ Connected Peasants With Workers in the Russian Revolution.” <i>Socialist Worker</i>, 17 July 2017, socialistworker.co.uk/features/bread-peace-and-land-connected-peasants-with-workers-in-the-russian-revolution.
        <Padding value="5px"/>
        “Russo-Japanese War (Russo-Japanese History).” <i>Encyclopædia Britannica</i>, www.britannica.com/event/Russo-Japanese-War/images-videos.
      </div>
    </>
  )


  return (
    <div style={{ width: "40vw", maxWidth: "40vw" }}>
      <h1 className="sources">Bibliography</h1>
      <br></br>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <button style={{ color: "forestgreen" }} onClick={openInfoCiteOverlay}><h3>Information (MLA)</h3></button>
        
        <button style={{ color: "forestgreen" }} onClick={openImageCiteOverlay}><h3>Images (MLA)</h3></button>
      </div>

      <Overlay type={infoCiteOverlay} function={closeInfoCiteOverlay} heading="Information Bibliography - MLA" content={informationCite}/>
      <Overlay type={imageCiteOverlay} function={closeImageCiteOverlay} heading="Images Bibliography - MLA" content={imagesCite}/>

      <Padding value="25px"/>
    </div>
  )
}

export default Bibliography