import classes from "./page.module.css"
import Image from "next/image";
import {getMeal} from "@/lib/meals";
import NotFound from "@/app/not-found";

export default function MealDetailsPage({params}) {
    const meal = getMeal(params.mealSlug)

    if (!meal) {
        return <NotFound/>
    }

    meal.instructions = meal.instructions.replace(/\n/g, "<br/>")
    return <>
       <header className={classes.header}>
           <div className={classes.image}>
               <Image src={meal.image} alt={meal.title} fill/>
           </div>

           <div className={classes.headerText}>
               <h1>{meal.title}</h1>
               <p className={classes.creator}>
                   by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
               </p>

               <p className={classes.summary}>SUMMARY</p>
           </div>
       </header>
        <main className={classes.main}>
            <p className={classes.instructions} dangerouslySetInnerHTML={{__html: meal.instructions,}}></p>
        </main>
    </>
}