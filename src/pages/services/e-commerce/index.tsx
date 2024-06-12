import BlackLayer from "@component/components/blackLayer";
import Layout from "@component/components/layouts/layout";
import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";

import Head from "next/head";
import useNavigation from "@component/components/customHooks/useNavigation";
import ReusableButton from "@component/components/customHooks/reusableContactButton";

type Technology =
  | "AR/VR"
  | "Machine Learning"
  | "Computer Learning"
  | "Predictive Analytics";

interface Description {
  title: string;
  details: string[];
}

export interface EcommerceService {
  title: string;
  description: string;
}

const Index: React.FC = () => {
  const { navigate } = useNavigation();

  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const data = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
      cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
    },
    {
      title: "25 July 1940",
      cardTitle: "The Battle of Britain",
      cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
      cardDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
        The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.`,
    },
    {
      title: "June 1941",
      cardTitle: "Operation Barbarossa",
      cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
      cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
        Barely a month after the fall of France, and while the Battle of Britain was being fought, Hitler started planning for the Blitzkrieg campaign against Russia, which began on 22 June 1941. Despite repeated warnings, Stalin was taken by surprise, and for the first few months the Germans achieved spectacular victories, capturing huge swathes of land and hundreds of thousands of prisoners. But they failed to take Moscow or Leningrad before winter set in.
        On 5/6 December, the Red Army launched a counter-offensive which removed the immediate threat to the Soviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`,
    },
    {
      title: "7 December 1941",
      cardTitle: "Pearl Harbor",
      cardSubtitle: `The destroyer USS Shaw explodes in dry dock after being hit by Japanese aircraft`,
      cardDetailedText: `After Japan’s occupation of French Indo-China in July 1941, US President Franklin D Roosevelt, followed by Britain and the Netherlands, ordered the freezing of Japanese assets.
        Many Japanese now believed that there was no alternative between economic ruin and going to war with the United States and the European colonial powers. In October 1941, a hardline government under General Hideki Tojo came to power, and preparations were made to deliver a devastating blow against the Americans.`,
    },
    {
      title: "15 February 1942",
      cardTitle: "The fall of Singapore",
      cardSubtitle: `Lieutenant General Arthur Percival and staff on their way to the Singapore Ford factory to negotiate the island’s surrender with General Yamashita`,
      cardDetailedText: `The Japanese began their invasion of Malaya on 8 December 1941, and very soon the British and empire defenders were in full retreat.
        Told previously that the Japanese were no match for European troops, morale among the defending forces slumped as General Tomoyuki Yamashita’s forces moved swiftly southwards towards Singapore.
        The sinking of the British capital ships HMS Prince of Wales and Repulse by Japanese aircraft also contributed to the decline in morale, and panic began to set in among the civil population and the fighting troops. British commander Lieutenant General Arthur Percival had hoped to make a stand at Johore, but was forced to withdraw to Singapore Island. The Japanese landed there on 8/9 February, and before long the defence collapsed. To avoid further bloodshed, and with his water supply gone, Percival surrendered on 15 February.
        Churchill described the surrender as, “the worst disaster… in British military history”. Over 130,000 British and empire troops surrendered to a much smaller Japanese force, which only suffered 9,824 battle casualties during the 70-day campaign. Singapore was not only a humiliating military defeat, but also a tremendous blow to the prestige of the ‘white man’ throughout Asia.`,
    },
    {
      title: "4 June 1942",
      cardTitle: "Midway",
      cardSubtitle: `The American aircraft carrier USS Yorktown under Japanese attack during the battle of Midway`,
      cardDetailedText: `For six months after Pearl Harbor, just as Admiral Yamamoto predicted, Japanese forces carried all before them, capturing Hong Kong, Malaya, the Philippines and the Dutch East Indies. In May 1942, in an attempt to consolidate their grip on their new conquests, the Japanese sought to eliminate the United States as a strategic Pacific power.
        This would be done by luring into a trap the US navy carriers that had escaped Pearl Harbor, while at the same time the Japanese would occupy the Midway atoll in preparation for further attacks. The loss of the carriers would, the Japanese hoped, force the Americans to the negotiating table. In the event, it was the Americans who inflicted a crushing defeat on the Japanese. Their codebreakers were able to determine the location and date of the Japanese attack. This enabled US admiral Chester Nimitz to organise a trap of his own.
        During the ensuing battle the Japanese suffered the loss of four carriers, one heavy cruiser and 248 aircraft, while American losses totalled one carrier, one destroyer and 98 planes. By their victory at Midway, the turning point of the Pacific war, the Americans were able to seize the strategic initiative from the Japanese, who had suffered irreplaceable losses. Admiral Nimitz described the battle’s success as “Essentially a victory of intelligence”, while President Roosevelt called it “Our most important victory in 1942… there we stopped the Japanese offensive.”`,
    },
    {
      title: "25 October 1942",
      cardTitle: "Alamein",
      cardSubtitle: `German prisoners of war wait for transport after their capture at Alamein`,
      cardDetailedText: `The North African campaign began in September1940, and for the next two years the fighting was marked by a succession of Allied and Axis advances and retreats. In the summer of 1942, the Axis forces under ‘Desert Fox’ field marshal, Erwin Rommel, looked poised to take Cairo and advance on the Suez Canal.
        The British Middle East commander General Claude Auchinleck took personal command of the defending Eighth Army and halted the retreat at the strong defensive line at El Alamein. But Churchill, dissatisfied with Auchinleck, replaced him in August with General Harold Alexander, while Lieutenant -General Bernard Montgomery took over command of the Eighth Army.
        Montgomery immediately began to build up an enormous superiority in men and equipment, finally launching his offensive at Alamein on 23 October 1942. By the beginning of November, the Axis forces were in full retreat, although final victory in North Africa was not achieved until May 1943.
        Although Montgomery has been criticised for being too cautious in exploiting his success at Alamein, it made him a household name and he became Britain’s most popular general of the war. Churchill hailed Alamein as a “Glorious and decisive victory… the bright gleam has caught the helmets of our soldiers, and warmed and cheered all our hearts”.`,
    },
    {
      title: "February 1943",
      cardTitle: "Stalingrad",
      cardSubtitle: `Red Army soldiers hoist the Soviet flag over a recaptured Stalingrad factory following the German surrender`,
      cardDetailedText: `Throughout September and October, under General Vassili Chuikov, the city’s defenders contested every yard of ground of the devastated city.
        The Red Army’s stubborn defence allowed General Georgi Zhukov time to prepare a counterattack that was launched on 19 November 1942, and which soon trapped the Sixth Army commanded by General Friederich Paulus.
        Hitler, wrongly assured by Göring that the Luftwaffe could supply Stalingrad by air, ordered Paulus to hold out. He also ordered Field Marshal Erich Manstein to break through and relieve the beleaguered Sixth Army. Manstein was unsuccessful, and on 31 January 1943 Paulus capitulated. Of the 91,000 German troops who went into captivity, less than 6,000 returned home after the war. Stalingrad was one of Germany’s greatest defeats, and it effectively marked the end of Hitler’s dreams of an empire in the east.
        `,
    },
    {
      title: "6 June 1944",
      cardTitle: "D-Day, Operation Overlord",
      cardSubtitle: `British commandos of the First Special Service Brigade land on Sword Beach`,
      cardDetailedText: `Operation Overlord, the invasion and liberation of north-west Europe, began on D-Day, 6 June 1944.
        That day, under the overall command of US General Dwight Eisenhower, British, Canadian and American troops, supported by the Allied navies and air forces, came ashore on the coast of Normandy. By the end of the day, 158,000 men, including airborne troops, had landed. Initially, except on the American Omaha beach, German resistance was unexpectedly light. But it soon stiffened and the Allied breakout from the beachhead area was painfully slow.
        The fierceness of the fighting can be gauged by the fact that in Normandy British infantry battalions were suffering the same percentage casualty rates as they had on the Western Front in 1914–1918. Eventually the breakout was achieved, and on 25 August, Paris was liberated. Brussels followed on 3 September. Hopes that the war might be won in 1944 were dashed by the Allied failure at Arnhem and the unexpected German offensive in the Ardennes in December.
        It was not until 4 May 1945 that the German forces in north-west Europe surrendered to Montgomery at his HQ on Lüneburg Heath.`,
    },
    {
      title: "February 1945",
      cardTitle: "The Big Three",
      cardSubtitle: `Churchill, Roosevelt and Stalin sit for a group photograph during the Yalta conference`,
      cardDetailedText: `Between June 1940 and June 1941, Britain stood alone against Hitler. But then, after the German invasion of Russia and the Japanese attack on Pearl Harbor, she gained two powerful allies.
        For the next four years Churchill did his utmost to foster ‘The Grand Alliance’ against the Nazis. He even earned the grudging admiration of Nazi propaganda chief Dr Goebbels who said, “…I can feel only respect for this man, for whom no humiliation is too base and no trouble too great when the victory of the Allies is at stake”.
        Churchill conferred with both Roosevelt and Stalin to hammer out strategy and to discuss postwar arrangements. The three men congregated for the first time at Tehran in November 1943. There, and again at their last meeting at Yalta, Churchill was conscious of the fact that Britain, exhausted by her war effort, was now very much the junior partner of the two emerging superpowers.`,
    },
    {
      title: "13/14 February 1945",
      cardTitle: "Dresden",
      cardSubtitle: `Dresden under incendiary bomb attack`,
      cardDetailedText: `At Yalta, an Allied plan to bomb the hitherto untouched city of Dresden was discussed. The reason for attacking the city was due principally to its strategic importance as a communications centre in the rear of the German retreat that followed the Soviet winter offensive of January 1945. It was also believed that Dresden might be used as an alternative to Berlin as the Reich capital.
        The attack was part of a plan codenamed ‘Thunderclap’, designed to convince the Germans that the war was lost. It was drawn up in January 1945, when Hitler’s Ardennes offensive, V2 rocket attacks on Britain and the deployment of snorkel-equipped U-boats clearly demonstrated that Germany was still capable of offering stubborn resistance. Strategic bombing attacks had previously failed to break Germany, although they had proved valuable in reducing its capacity to wage war.
        Now, on the night of 13/14 February 1945, Dresden was attacked by 800 RAF bombers, followed by 400 bombers of the United States Army Air Force. The bombing created a firestorm that destroyed 1,600 acres of Dresden. Even today it is still uncertain as to how many died and estimates have ranged from 25,000 to 135,000. Most authorities now put the death toll at around 35,000. The scale of destruction, the enormous death toll, and its timing at such a late stage in the war, have all ensured that the bombing of Dresden still remains highly controversial.`,
    },
    {
      title: "8 May 1945",
      cardTitle: "VE Day",
      cardSubtitle: `millions of people rejoice in the news that Germany has surrendered – the war in Europe was finally over`,
      cardDetailedText: `On the afternoon of 8 May 1945, the British prime minister Winston Churchill made the radio announcement that the world had long been waiting for.
        “Yesterday morning,” he declared, “at 2.41 a.m., at General Eisenhower’s headquarters, General Jodl, the representative of the German High Command, and Grand Admiral Dönitz, the designated head of the German State, signed the act of unconditional surrender of all German land, sea and air forces in Europe.”
        After nearly six years, the war in Europe was finally over.`,
    },
    {
      title: "9 August 1945",
      cardTitle: "Nagasaki",
      cardSubtitle: `Atomic bomb mushroom cloud over the Japanese city of Nagasaki`,
      cardDetailedText: `The Second World War began at dawn on Friday 1 September 1939, when Adolf Hitler launched his invasion of Poland.
        The Poles fought bravely, but they were heavily outnumbered in both men and machines, and especially in the air. Britain and France declared war on Germany on 3 September 1939, but gave no real assistance to Poland. Two weeks later, Stalin invaded eastern Poland, and on 27 September Warsaw surrendered. Organised Polish resistance ceased after another week’s fighting. Poland was divided up between Hitler and Stalin.
        In Poland the Nazis unleashed a reign of terror that was eventually to claim six million victims, half of whom were Polish Jews murdered in extermination camps. The Soviet regime was no less harsh. In March and April 1940, Stalin ordered the murder of over 20,000 Polish officers and others who had been captured in September 1939. Tens of thousands of Poles were also forcibly deported to Siberia.
        By May 1945, and despite his promises to Churchill and Roosevelt, Stalin had installed a subservient communist regime in Poland.
        Back in 1939, Poland’s then-leader Marshal Eduard Smigly-Rydz had warned, “With the Germans we risk losing our liberty, but with the Russians we lose our soul.”`,
    },
  ];
  const ecommerceItems: EcommerceService[] = [
    {
      title: "Custom E-Commerce Website Development",
      description:
        "Tailored development of e-commerce websites to meet unique business needs.",
    },
    {
      title: "E-Commerce Platform Integration Services",
      description:
        "Seamless integration of e-commerce platforms with existing systems.",
    },
    {
      title: "Mobile E-Commerce Solutions",
      description:
        "Comprehensive mobile solutions for e-commerce, including apps and mobile-optimized websites.",
    },
    {
      title: "E-Commerce Data Analytics",
      description:
        "Advanced analytics solutions to drive business insights and growth.",
    },
    {
      title: "E-Commerce Security Solutions",
      description:
        "Robust security measures to protect e-commerce platforms and customer data.",
    },
    {
      title: "E-Commerce SEO and Digital Marketing Services",
      description:
        "Effective SEO and digital marketing strategies to boost online visibility and sales.",
    },
  ];

  const descriptions: Record<Technology, Description> = {
    "AR/VR": {
      title:
        "We can incorporate AR and VR technologies into your ecommerce store to create immersive consumer experiences and help customers make purchasing decisions more confidently.",
      details: [
        "Virtual Showroom",
        "Virtual Fitting Room",
        "AR product catalogs and product reviews",
        "3D product demos",
        "Product samplers",
        "Product descriptions and support captions",
      ],
    },
    "Machine Learning": {
      title: "Machine Learning description...",
      details: [],
    },
    "Computer Learning": {
      title: "Computer Learning description...",
      details: [],
    },
    "Predictive Analytics": {
      title: "Predictive Analytics description...",
      details: [],
    },
  };

  const [selectedTech, setSelectedTech] = useState<Technology>("AR/VR");

  const handleButtonClick = (tech: Technology) => {
    setSelectedTech(tech);
  };

  const chunkArray = (arr: string[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const detailsChunks = chunkArray(descriptions[selectedTech].details, 3);
  return (
    <Layout>
     
      <Head>
        <title>Ecommerce | Brewcode Technology Private Limited</title>
        <meta
          name="description"
          content="Project Timeline using Next.js and Bootstrap"
        />
       
      </Head>
      <div className="ecommerce-hero-section">
        <div className="overlay-ar-vr">
          <div className="container">
            <div className="row">
            <div className="hero-section-content">
            <h1 className="services-header mb-3 text-center">
            Looking For Experienced Team
              </h1>
            
            </div>
            </div>
          </div>
        </div>
      </div>
     

      <BlackLayer />
      <div className="case-studies-black-container container-fluid">
        <div className="container">
          <p className="e-commerce-description mb-5">
            Elevate your online business with our tailored Ecommerce solutions that seamlessly integrate technology, user experience, and business 
            strategy. Our team of experts leverages cutting-edge technologies to deliver robust and scalable Ecommerce platforms. Here's what our 
            Ecommerce services encompass
          </p>
          <div className="row">
            <div className="col-md-5">
              <div className="d-flex flex-column">
                <h2 className="our-e-commerce-services col-12 py-3">
                  Our E-Commerce Services
                </h2>

                <div className="img-container">
                  <img
                    src="/images/e-commerce.jpg"
                    alt="E-Commerce Services"
                    className=" e-commerce-img"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-7 accordion-container">
              {ecommerceItems.map((item, index) => (
                <div className="d-flex flex-column mt-5" key={index}>
                  <div
                    className="e-commerce-accordion d-flex justify-content-between"
                    onClick={() => toggleAccordion(index)}
                  >
                    <p className="accordion-title">{item.title}</p>
                    <span className="icon-border">
                      {openAccordionIndex === index ? (
                        <IoMdArrowDropup fontSize={40} />
                      ) : (
                        <IoMdArrowDropdown fontSize={40} />
                      )}
                    </span>
                  </div>
                  <hr className="accordion-divider" />
                  {openAccordionIndex === index && (
                    <div className="e-commerce-content">
                      <p className="e-commerce-description">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-5">
              <h2 className="advanced-technologies-heading">
                Advanced Technologies in <br />
                E-Commerce
              </h2>
            </div>

            <div className="col-md-7">
              <p className="e-commerce-description">
                We apply advanced technologies to help online businesses deliver
                superb customer experiences and get a competitive edge.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-6">
              {(
                [
                  "AR/VR",
                  "Machine Learning",
                  "Computer Learning",
                  "Predictive Analytics",
                ] as Technology[]
              ).map((tech) => (
                <div
                  key={tech}
                  className={`${
                    selectedTech === tech
                      ? "bg-white text-black"
                      : "details-black text-white"
                  } ${selectedTech !== tech ? "" : "right-arrow"} p-2 mb-2`}
                  onClick={() => handleButtonClick(tech)}
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="col-lg-7 col-md-6">
              {selectedTech && (
                <div className="text-white details-container">
                  <h5 className="detail-heading mb-2">{selectedTech}</h5>
                  <p className="detail-description">
                    {descriptions[selectedTech].title}
                  </p>
                  {detailsChunks.length > 0 && (
                    <div className="row">
                      {detailsChunks.map((chunk, chunkIndex) => (
                        <div key={chunkIndex} className="col-12 col-md-6">
                          <ul style={{ paddingLeft: "11px" }}>
                            {chunk.map((detail, index) => (
                              <li key={index} className="py-2 detail-item">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="container stepperContainer">
          <div className="row my-5">
  <div className="col-12 col-md-6 col-lg-3 step mb-4">
    <div className="stepHeader">
      <span className="stepNumber">1</span>
      <p className="stepTitle">Planning</p>
    </div>
    <div className="stepProgress">
      <div className="circle"></div>
      <div className="line-steper"></div>
    </div>
    <div className="stepDescription">
      Definition of requirements for the future ecommerce solution
    </div>
  </div>
  <div className="col-12 col-md-6 col-lg-3 step mb-4">
    <div className="stepHeader">
      <span className="stepNumber">2</span>
      <p className="stepTitle">Design</p>
    </div>
    <div className="stepProgress">
      <div className="circle"></div>
      <div className="line-steper"></div>
    </div>
    <div className="stepDescription">
      Hands-on prototyping, specification review and technical sketching, UI/UX design
    </div>
  </div>
  <div className="col-12 col-md-6 col-lg-3 step mb-4">
    <div className="stepHeader">
      <span className="stepNumber">3</span>
      <p className="stepTitle">Development</p>
    </div>
    <div className="stepProgress">
      <div className="circle"></div>
      <div className="line-steper"></div>
    </div>
    <div className="stepDescription">
      Coding, front-end and back-end development, integration with other systems and tools
    </div>
  </div>
  <div className="col-12 col-md-6 col-lg-3 step mb-4">
    <div className="stepHeader">
      <span className="stepNumber">4</span>
      <p className="stepTitle">Acceptance Testing</p>
    </div>
    <div className="stepProgress">
      <div className="circle"></div>
      <div className="line-steper"></div>
   
    </div>
    <div className="stepDescription">
      End-to-end acceptance testing and expert supervision
    </div>
  </div>
  <div className="col-12 col-md-6 col-lg-3 step mb-4">
    <div className="stepHeader">
      <span className="stepNumber">5</span>
      <p className="stepTitle">Deployment</p>
    </div>
    <div className="stepProgress">
      <div className="circle"></div>
      <div className="line-steper"></div>
  
    </div>
    <div className="stepDescription">
      Deployment to production environment
    </div>
  </div>
  <div className="col-12 col-md-6 col-lg-3 step mb-4">
    <div className="stepHeader">
      <span className="stepNumber">6</span>
      <p className="stepTitle">Maintenance</p>
    </div>
    <div className="stepProgress">
      <div className="circle"></div>
      <div className="line-steper"></div>
    
    </div>
    <div className="stepDescription">
      Ongoing support and maintenance
    </div>
  </div>
</div>

</div>

        </div>
        <div className="contact-bg my-5">
          <div
            className="d-flex justify-content-between"
            style={{ height: "100px", width: "88%", margin: "0 auto" }}
          >
            <h1 className="text-white connect-with-brewcode p-1">
              Connect With Brewcode
            </h1>
            <ReusableButton
              label="Contact Us"
              navigateTo={() => navigate("contact-us")}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
