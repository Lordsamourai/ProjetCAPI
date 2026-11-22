import {median, strict, unanime, contientQuestion, supprimerCafe} from "./rulesFunctions";
export function GetRuleResult(votes: string[], rule: string, turn: number): { statut: number } 
{
  if(votes.length === 0){
    console.log("Aucun vote n'a été reçu");
    return {statut: -1}
  }

  votes = supprimerCafe(votes);

  if(contientQuestion(votes)=== -1){
    return {statut:-1}
  }

  if(turn ===1){
    return {statut: unanime(votes)};
  }
 
  if (rule === "median"){
    return{statut: median(votes)};
  }
  if(rule === "strict"){
    return{statut: strict(votes)};
  }

  return {statut: -1};
}