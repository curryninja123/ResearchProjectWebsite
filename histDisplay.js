function displayHist (year) {
    document.getElementById("histboxtitle").innerHTML = year;
    document.getElementById("histbox").innerHTML = getInfo(year);
};

function getInfo (year) {
  switch (year) {
    case "October 30, 1821":
      return "Born at the Moscow Mariinskii Hospital. His father was a staff doctor there. Since the hospital served the poor, Dostoevsky was exposed to poverty at an early age.";
      break;
    case "1828":
      return "His father attained a nobleman’s rank, and the family moved to a wealthy estate in Darovoc.";
      break;
    case "1837":
      return "His mother dies, beginning a series of tragedies in his life";
      break;
    case "1838":
      return "His father enrolls him in the St. Petersburg Military Engineering Academy. Instead of focusing on the curriculum though, he reads and learns about literature.";
      break;
    case "1839":
      return "His father dies, in either an act of violence by peasants or by a stroke. His father’s early death features strongly in some of his work.";
      break;
    case "1844":
      return "After completing his training and his one year of service, Dostoevsky retires to focus on literature.";
      break;
    case "1844-1846":
      return "Dostoevsky writes and publishes his first work, Poor Folk. It features Makar Devushkin, a financially unstable but kind clerk and Varvara, a wealthy widow. The novel shortly receives a strong critical reception.";
      break;
    case "1846":
      return "Dostoevsky publishes another work, The Double. In it, a town clerk finds another version of himself who outperforms him. At the end of the novel, the clerk sees even more copies of himself and is taken to an insane asylum. Readers thought the book was too bizarre, so it did not meet the same reception as Poor Folk.";
      break;
    case "1849":
      return "Dostoevsky was imprisoned for conspiring in anti-government activity as a member of Mikhail Butashevich-Petrashevsky’s reading circle.";
      break;
    case "November 1849":
      return "Dostoevsky and the other members are given a death sentence, but this is gradually reduced to four years of hard labor and service in the army. They are not told this, however, and continue to believe that they would be executed.";
      break;
    case "December 22, 1849":
      return "Dostoevsky and the other members are told that they would be executed by firing squad. Right before they are shot, the execution is called off and they are informed of the punishment that the court decided. These mock executions were common, but usually the prisoners were told ahead of time.";
      break;
    case "February 1857":
      return "Dostoevsky married Maria Dmitrievna Isaeva, a widow with a young son and no income.";
      break;
    case "1855":
      return "Alexander II takes over and, being a generous ruler, retires Dostoevsky from military service and grants him permission to publish.";
      break;
    case "December 1859":
      return "After a long time away, Dostoevsky is finally allowed to return to St. Petersburg, but under the watch of the secret police.";
      break;
    case "1863":
      return "Dostoevsky makes a trip to Europe to entertain his mistress Apollinariia Prokofevna Suslova, a fellow writer.";
      break;
    case "1864":
      return "Dostoevsky’s wife Mariia and later his brother Mikhail die.";
      break;
    case "1864-1866":
      return "Affected by the deaths of those closest to him, Dostoevsky writes <i>Notes from the Underground</i> (published 1864) and <i>Crime and Punishment (published 1866).</i>";
      break;
    case "1866":
      return "Dostoevsky publishes <i>The Gambler</i>, a novel based on the character of Suslova. He wrote the novel in twenty-six days with the help of Anna Grigorevna Snitkina.";
      break;
    case "February 15, 1867":
      return "After the success of The Gambler, Dostoevsky and Snitkina get married. They soon fled to Europe to escape the loan sharks pursuing them.";
      break;
    case "1869":
      return "Dostoevsky publishes <i>The Idiot</i>.";
      break;
    case "1872":
      return "Dostoevsky publishes <i>The Possessed.</i>";
      break;
    case "1881":
      return "Dostoevsky completes and publishes his final novel, <i>The Brothers Karamazov.</i>"
      break;
    case "January 26, 1881":
      return "Shortly after publishing his last work, Dostoevsky dies at his home in St. Petersburg.";
      break;
    default:
      break;
  }
};
