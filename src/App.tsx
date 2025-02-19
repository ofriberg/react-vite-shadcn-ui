import CountBtn from "@/components/count-btn";
import ReactSVG from "@/assets/react.svg";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ResizableDemo } from "./components/Resizable";
import { Fragment, useEffect, useState } from "react";
import { TableDemo } from "./components/Table";
import { Button } from "./components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

const useStryktipset = () => {
  const [stryktipset, setStryktipset] = useState<StryktipsetTableProps | null>(
    null
  );

  useEffect(() => {
    fetch("http://83.188.12.216:3000/api/scrape-stryktipset")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setStryktipset(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return stryktipset;
};

type StryktipsetTableProps = {
  data: {
    match: string;
    results: {
      choice: string;
      odds: string;
      folket: string;
    }[];
  }[];
  requests: number;
};

const StryktipsetTable = () => {
  /*   const stryktipset = useStryktipset();

  if (!stryktipset) return null; */
  const stryktipset = {
    data: [
      {
        match: "Aston Villa - Chelsea",
        results: [
          {
            choice: "1",
            odds: "2,75",
            folket: "42%",
          },
          {
            choice: "X",
            odds: "3,75",
            folket: "26%",
          },
          {
            choice: "2",
            odds: "2,50",
            folket: "32%",
          },
        ],
      },
      {
        match: "Arsenal - West Ham",
        results: [
          {
            choice: "1",
            odds: "1,28",
            folket: "72%",
          },
          {
            choice: "X",
            odds: "6,10",
            folket: "16%",
          },
          {
            choice: "2",
            odds: "13,00",
            folket: "12%",
          },
        ],
      },
      {
        match: "Ipswich - Tottenham",
        results: [
          {
            choice: "1",
            odds: "3,80",
            folket: "29%",
          },
          {
            choice: "X",
            odds: "3,85",
            folket: "23%",
          },
          {
            choice: "2",
            odds: "2,00",
            folket: "48%",
          },
        ],
      },
      {
        match: "Fulham - Crystal Palace",
        results: [
          {
            choice: "1",
            odds: "2,10",
            folket: "52%",
          },
          {
            choice: "X",
            odds: "3,50",
            folket: "27%",
          },
          {
            choice: "2",
            odds: "3,75",
            folket: "21%",
          },
        ],
      },
      {
        match: "Bournemouth - Wolverhampton",
        results: [
          {
            choice: "1",
            odds: "1,65",
            folket: "65%",
          },
          {
            choice: "X",
            odds: "4,25",
            folket: "19%",
          },
          {
            choice: "2",
            odds: "5,40",
            folket: "16%",
          },
        ],
      },
      {
        match: "Southampton - Brighton",
        results: [
          {
            choice: "1",
            odds: "5,60",
            folket: "24%",
          },
          {
            choice: "X",
            odds: "4,40",
            folket: "21%",
          },
          {
            choice: "2",
            odds: "1,61",
            folket: "55%",
          },
        ],
      },
      {
        match: "Coventry - Preston",
        results: [
          {
            choice: "1",
            odds: "1,86",
            folket: "57%",
          },
          {
            choice: "X",
            odds: "3,60",
            folket: "23%",
          },
          {
            choice: "2",
            odds: "4,40",
            folket: "20%",
          },
        ],
      },
      {
        match: "Norwich - Stoke",
        results: [
          {
            choice: "1",
            odds: "1,62",
            folket: "58%",
          },
          {
            choice: "X",
            odds: "4,20",
            folket: "25%",
          },
          {
            choice: "2",
            odds: "5,30",
            folket: "17%",
          },
        ],
      },
      {
        match: "Portsmouth - Queens Park Rangers",
        results: [
          {
            choice: "1",
            odds: "2,28",
            folket: "42%",
          },
          {
            choice: "X",
            odds: "3,55",
            folket: "26%",
          },
          {
            choice: "2",
            odds: "3,10",
            folket: "32%",
          },
        ],
      },
      {
        match: "Swansea - Blackburn",
        results: [
          {
            choice: "1",
            odds: "2,43",
            folket: "36%",
          },
          {
            choice: "X",
            odds: "3,35",
            folket: "26%",
          },
          {
            choice: "2",
            odds: "2,88",
            folket: "38%",
          },
        ],
      },
      {
        match: "West Bromwich - Oxford",
        results: [
          {
            choice: "1",
            odds: "1,63",
            folket: "65%",
          },
          {
            choice: "X",
            odds: "3,90",
            folket: "20%",
          },
          {
            choice: "2",
            odds: "6,00",
            folket: "15%",
          },
        ],
      },
      {
        match: "Bolton - Leyton Orient",
        results: [
          {
            choice: "1",
            odds: "2,15",
            folket: "49%",
          },
          {
            choice: "X",
            odds: "3,55",
            folket: "26%",
          },
          {
            choice: "2",
            odds: "3,30",
            folket: "25%",
          },
        ],
      },
      {
        match: "Northampton - Bristol Rovers",
        results: [
          {
            choice: "1",
            odds: "2,14",
            folket: "43%",
          },
          {
            choice: "X",
            odds: "3,55",
            folket: "30%",
          },
          {
            choice: "2",
            odds: "3,35",
            folket: "27%",
          },
        ],
      },
    ],
    requests: 44,
  };

  return (
    <div className="max-h-[80vh] w-full overflow-y-auto ">
      <Table className="w-full">
        <TableBody>
          {stryktipset.data.map((d) => {
            const favoredByPeople = Math.max(
              ...d.results.map((r) => Number(r.folket.replace("%", "")))
            );

            return (
              <Fragment key={d.match}>
                <TableRow className="border-t border-b border-gray-500">
                  <TableCell className="w-full text-left font-semibold">
                    {d.match}
                  </TableCell>
                  <TableCell className="w-full text-center">
                    <ToggleGroup type="multiple">
                      <div className="flex gap-x-4 justify-center">
                        {d.results.map((result) => (
                          <ToggleGroupItem
                            value={result.choice}
                            className={
                              Number(result.folket.replace("%", "")) ===
                              favoredByPeople
                                ? "outline-white outline-dashed"
                                : undefined
                            }
                          >
                            {result.choice}
                          </ToggleGroupItem>
                        ))}
                      </div>
                    </ToggleGroup>
                  </TableCell>
                </TableRow>

                <TableRow className="border-none">
                  <TableCell className="w-full text-center" />
                  <TableCell className="w-full text-center">
                    <div className="flex gap-x-4 justify-center">
                      {d.results.map((result) => (
                        <p key={result.odds} className="w-full text-center">
                          {result.odds}
                        </p>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow className="border-none">
                  <TableCell className="w-full text-center" />
                  <TableCell className="w-full text-center">
                    <div className="flex gap-x-4 justify-center">
                      {d.results.map((result) => (
                        <p
                          key={result.folket}
                          className="w-full text-center text-xs"
                        >
                          {result.folket}
                        </p>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              </Fragment>
            );
          })}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} className="text-center font-bold">
              Total Requests: {stryktipset.requests}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

function App() {
  const stryktipset = useStryktipset();
  console.log(stryktipset);
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-y-4">
        <StryktipsetTable />
      </div>
    </main>
  );
}

export default App;
