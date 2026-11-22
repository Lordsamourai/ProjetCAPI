import {median, strict, unanime, contientQuestion, supprimerCafe} from "./rulesFunctions";
export function GetRuleResult(votes: string[], rule: string, turn: number): { statut: number } 
{

  votes = supprimerCafe(votes);

    if(contientQuestion(votes)=== -1){
    return {statut:-1}
  }
  
  if(turn ===1){
    return {statut: unanime(votes)};
  }
 
  if (rule === "mediane"){
    return{statut: median(votes)};
  }
  if(rule === "stricte"){
    return{statut: strict(votes)};
  }



}