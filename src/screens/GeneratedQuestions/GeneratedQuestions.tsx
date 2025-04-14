import React from "react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Download, Edit2, Trash2 } from "lucide-react";

export const GeneratedQuestions = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white w-full max-w-[1280px] py-12 px-4">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Generated Questions</h1>
            <p className="text-gray-600">Review and edit your AI-generated questions</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Download className="h-4 w-4 mr-2" />
            Export All
          </Button>
        </header>

        <div className="space-y-6">
          {[1, 2, 3].map((index) => (
            <Card key={index} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg">Question {index}</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">What is the main difference between REST and GraphQL?</p>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="radio" name={`q${index}`} className="rounded" />
                      <span>REST is a protocol, GraphQL is a query language</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name={`q${index}`} className="rounded" />
                      <span>REST uses multiple endpoints, GraphQL uses a single endpoint</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name={`q${index}`} className="rounded" />
                      <span>REST is older, GraphQL is newer</span>
                    </label>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Correct Answer:</span> REST uses multiple endpoints, GraphQL uses a single endpoint
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-medium">Explanation:</span> While both REST and GraphQL are APIs, 
                    the key architectural difference is that REST APIs typically require multiple endpoints 
                    for different data requirements, while GraphQL uses a single endpoint where clients can 
                    specify exactly what data they need.
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};