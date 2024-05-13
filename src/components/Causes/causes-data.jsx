export const causesInfo = [{
    id: 0,
    information: "Economic Inequality",
    function: openEconomicHardshipsOverlay,
}, {
    id: 1,
    information: "WWI",
    function: 'openConstantWarOverlay',
}, {
    id: 2,
    information: "Military Defeats and Loss of Confidence",
    function: 'openWorkingConditionsOverlay',
}, {
    id: 3,
    information: "Rise of Revolutionary Movements",
    function: 'openPovertyOverlay',
}]

// Define functions to return content for each cause
export function openEconomicHardshipsOverlay() {
  return (
      <>
        <img src="https://socialistworker.co.uk/wp-content/uploads/images1412/Image/2017/2563/russian-peasants-1917.jpg" style={{ width: "350px", height: "auto", float: "right", padding: "10px"}}/>
        <div style={{ textAlign: "left"}}>
            <p>Most of Russian Society consists of peasants and workers, who suffered from extreme poverty.</p>
            <br></br>
            <p>Most of these peasants are challenged with heavy taxation from the government, debt, and lack of access to modern farming at that time. In addition, many peasants lived in overcrowded villages with limited resources which fails to their own ends meet.</p>
            <br></br>
            <p>Urban workers are faced with horrible living & working conditions: living in rooms with dozens of other workers, heavy machinery that could lead to death or injury of limbs, dangerous corners or jobs etc. Both peasants and the workers had limited rights which led to protests and strikes mainly on the streets of Petrograd.</p>
            <br></br>
            <p>While the majority of the Russian population is suffering, a small elite group of people, such as owners of the factories or farm landlords, enjoyed immense wealth and immense power/privileges. This obviously created a lot of discontent on the population</p>
        </div>
      </>
  );
}

export function openConstantWarOverlay() {
  return (
    <>
        <img src="https://cdn.britannica.com/71/64871-050-8548CA22/Eastern-Front-troops-Germany-Austria-Hungary-Turkey-Russia.jpg" style={{ width: "350px", height: "auto", float: "right", padding: "10px"}}/>
        <br></br>
        <div>
            In WW1, the inefficient Tsarist government meant there was a huge shortage of resources, such as weapons or food, to fight the war.
            The economy was plummeting and the Russian people was starving. 
            And if the public was upset by a small war with Japan (Russo-Japanese War), imagine how much worse it would be with a big one like this.
            <br></br>
            <br></br>
            Therefore, it would come as no suprise when the peasants, workers and the Russian people in general revolted and went on protests, strikes and marches (such as the beginning of the February Revolution when hungry women in Petrograd protested on the streets),
            all the while, Germany was invading and enjoying more victories on Russian territory.
        </div>
    
    </>
  );
}

export function openWorkingConditionsOverlay() {
  return (
      <>
        <img src="https://cdn.britannica.com/59/201059-050-E683B0C5/troops-Japanese-Russo-Japanese-War.jpg" style={{ width: "350px", height: "auto", float: "right", padding: "10px"}}/>
        <div>
            <p>After the Russo-Japanese War, confidence in the Tsar's regime has been eroding fast, and the confidence in their military has decreased.</p>
            <br></br>
            <p>In WW1, this was demonstrated even more as the Russian lost battle after battle, retreating straight into the heart of their homeland. This highlighted the inefficiency and corruption within the Tsar's government which undermined public support and confidence. </p>
        </div>
      </>
  );
}

export function openPovertyOverlay() {
  return (
    <>
        <div>
            <p>Seeing all of these events unfold, like the inefficient way of dealing of the war, and food shortages, the Bolsheviks decided to use this opportunity to increase their popularity and influence.</p>
            <br></br>
            <p>They came up with a slogan that meets all the Russian people's greivances: Peace, Land, Bread. This prompted people to increasingly support communism and the Bolsheviks & overturn the Tsar's regime.</p>
            <br></br>
            <p>The Russian people, being aware of this, sometimes even marched under their slogans in the streets of Petrograd to force the Provisional Government to make reforms.</p>
        </div>
    </>
  );
}
